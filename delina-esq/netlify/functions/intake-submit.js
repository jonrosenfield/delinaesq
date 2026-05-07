const { getStore } = require("@netlify/blobs");

const MAX_FIELDS = 100;
const MAX_FIELD_LEN = 50000;
const MAX_FILES = 25;

const DOC_STORES = {
  intake: "intake-forms",
  engagement: "engagement-letters",
  sow: "sow-documents",
  operating: "operating-agreements",
  upload: "secure-uploads",
};
const DOC_PREFIX = {
  intake: "intakes",
  engagement: "engagements",
  sow: "sows",
  operating: "operating",
  upload: "uploads",
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

const DOC_TYPE_LABEL = {
  intake: "Intake Form",
  engagement: "Engagement Letter",
  sow: "Statement of Work",
  operating: "Operating Agreement",
  upload: "Secure Document Upload",
};

function escapeHtml(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function sendSubmissionNotification({ type, slug, clientName, clientEmail, createdAt, submissionId, fileCount }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return; // not configured yet — skip silently

  // Recipient(s) — comma-separated list supported, e.g. "delina@delina.esq, jonathan@delina.esq"
  const recipientRaw = process.env.INTAKE_NOTIFICATION_EMAIL || "info@delina.esq";
  const recipient = recipientRaw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const fromAddress = process.env.RESEND_FROM || "Delina.ESQ <noreply@delina.esq>";
  const label = DOC_TYPE_LABEL[type] || type;
  const safeName = escapeHtml(clientName) || "Unknown";
  const safeEmail = escapeHtml(clientEmail) || "Not provided";
  const safeSlug = escapeHtml(slug);
  const safeId = escapeHtml(submissionId);
  const submittedAt = new Date(createdAt).toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;padding:32px;color:#0A0A0A;">
      <p style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#666;margin:0 0 8px;">DELINA.ESQ · New Submission</p>
      <h1 style="font-size:22px;font-weight:600;margin:0 0 24px;line-height:1.3;">New ${label} from ${safeName}</h1>
      <table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.6;">
        <tr><td style="padding:6px 0;color:#666;width:30%;">Type</td><td style="padding:6px 0;">${label}</td></tr>
        <tr><td style="padding:6px 0;color:#666;">Client name</td><td style="padding:6px 0;">${safeName}</td></tr>
        <tr><td style="padding:6px 0;color:#666;">Client email</td><td style="padding:6px 0;">${safeEmail}</td></tr>
        <tr><td style="padding:6px 0;color:#666;">Document slug</td><td style="padding:6px 0;font-family:ui-monospace,monospace;font-size:13px;">${safeSlug}</td></tr>
        <tr><td style="padding:6px 0;color:#666;">Files attached</td><td style="padding:6px 0;">${Number(fileCount) || 0}</td></tr>
        <tr><td style="padding:6px 0;color:#666;">Submitted</td><td style="padding:6px 0;">${escapeHtml(submittedAt)} PT</td></tr>
        <tr><td style="padding:6px 0;color:#666;">Submission ID</td><td style="padding:6px 0;font-family:ui-monospace,monospace;font-size:12px;color:#999;">${safeId}</td></tr>
      </table>
      <p style="margin:32px 0 0;">
        <a href="https://delina.esq/docs/admin" style="display:inline-block;background:#0A0A0A;color:#fff;text-decoration:none;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;padding:14px 28px;">Open Admin Dashboard →</a>
      </p>
    </div>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: recipient,
        reply_to: clientEmail || undefined,
        subject: `New ${label}: ${clientName || "Unknown"}`,
        html,
      }),
    });
    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend notification failed:", res.status, detail);
    }
  } catch (err) {
    console.error("Resend notification error:", err);
  }
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
    const clientName = cleanFields.full_name || cleanFields.printed_name || cleanFields.name || "";
    const clientEmail = cleanFields.email || cleanFields.client_email || "";

    await submissions.set(submissionId, JSON.stringify(record), {
      metadata: {
        type,
        slug,
        createdAt: record.createdAt,
        fileCount: cleanFiles.length,
        clientName,
        clientEmail,
      },
    });

    // Fire and await the notification, but don't fail the request if it errors
    await sendSubmissionNotification({
      type,
      slug,
      clientName,
      clientEmail,
      createdAt: record.createdAt,
      submissionId,
      fileCount: cleanFiles.length,
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
