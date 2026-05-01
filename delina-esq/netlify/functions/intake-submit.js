const { getStore } = require("@netlify/blobs");

const MAX_FIELDS = 100;
const MAX_FIELD_LEN = 50000;
const MAX_FILES = 25;

const DOC_STORES = {
  intake: "intake-forms",
  engagement: "engagement-letters",
  sow: "sow-documents",
  operating: "operating-agreements",
};
const DOC_PREFIX = {
  intake: "intakes",
  engagement: "engagements",
  sow: "sows",
  operating: "operating",
};

function validSlug(slug) {
  return typeof slug === "string" && /^[a-z0-9][a-z0-9-]{0,63}$/.test(slug);
}

function validSubmissionId(id) {
  return typeof id === "string" && /^[A-Za-z0-9_-]{8,80}$/.test(id);
}

function sanitizeFields(input) {
  if (!input || typeof input !== "object") return {};
  const out = {};
  let count = 0;
  for (const [k, v] of Object.entries(input)) {
    if (count++ >= MAX_FIELDS) break;
    if (typeof k !== "string" || k.length > 200) continue;
    const safeKey = k.replace(/[^A-Za-z0-9_\-.]/g, "").slice(0, 200);
    if (!safeKey) continue;
    const val = v == null ? "" : String(v);
    out[safeKey] = val.slice(0, MAX_FIELD_LEN);
  }
  return out;
}

function sanitizeFiles(input, type, slug, submissionId) {
  if (!Array.isArray(input)) return [];
  const prefix = `${DOC_PREFIX[type]}/${slug}/${submissionId}/`;
  return input
    .slice(0, MAX_FILES)
    .filter((f) => f && typeof f === "object" && typeof f.key === "string" && f.key.startsWith(prefix))
    .map((f) => ({
      originalName: String(f.originalName || "file").slice(0, 250),
      key: String(f.key).slice(0, 600),
      size: Number.isFinite(f.size) ? Math.max(0, Math.floor(f.size)) : 0,
      type: typeof f.type === "string" ? f.type.slice(0, 200) : "application/octet-stream",
    }));
}

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") return { statusCode: 200, headers, body: "" };
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const type = body.type || "intake";
    const { slug, submissionId, fields, files } = body;

    if (!DOC_STORES[type]) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid document type" }) };
    }
    if (!validSlug(slug)) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid slug" }) };
    }
    if (!validSubmissionId(submissionId)) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid submissionId" }) };
    }

    const docStore = getStore({
      name: DOC_STORES[type],
      siteID: process.env.NETLIFY_SITE_ID,
      token: process.env.NETLIFY_BLOBS_TOKEN,
    });
    const meta = await docStore.getMetadata(slug);
    if (!meta) {
      return { statusCode: 404, headers, body: JSON.stringify({ error: `No ${type} document exists for this slug` }) };
    }

    const cleanFields = sanitizeFields(fields);
    const cleanFiles = sanitizeFiles(files, type, slug, submissionId);

    const record = {
      submissionId,
      type,
      slug,
      createdAt: new Date().toISOString(),
      fields: cleanFields,
      files: cleanFiles,
      userAgent: (event.headers["user-agent"] || event.headers["User-Agent"] || "").slice(0, 300),
      ip: (event.headers["x-nf-client-connection-ip"] || event.headers["client-ip"] || "").slice(0, 64),
    };

    const submissions = getStore({
      name: "intake-submissions",
      siteID: process.env.NETLIFY_SITE_ID,
      token: process.env.NETLIFY_BLOBS_TOKEN,
    });
    await submissions.set(submissionId, JSON.stringify(record), {
      metadata: {
        type,
        slug,
        createdAt: record.createdAt,
        fileCount: cleanFiles.length,
        clientName: cleanFields.full_name || cleanFields.printed_name || cleanFields.name || "",
        clientEmail: cleanFields.email || cleanFields.client_email || "",
      },
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, submissionId }),
    };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
