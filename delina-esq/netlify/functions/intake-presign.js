const { getStore } = require("@netlify/blobs");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const crypto = require("crypto");

const MAX_FILE_BYTES = 500 * 1024 * 1024; // 500 MB
const URL_TTL_SECONDS = 900; // 15 minutes

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

const ALLOWED_MIME_PREFIXES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument",
  "application/vnd.ms-excel",
  "application/vnd.ms-powerpoint",
  "application/vnd.oasis.opendocument",
  "application/rtf",
  "application/zip",
  "application/x-zip-compressed",
  "application/json",
  "application/octet-stream",
  "application/vnd.ms-outlook",
  "message/rfc822",
  "image/",
  "text/",
];

function sanitizeFilename(name) {
  const replaced = String(name || "file").replace(/[\\/]/g, "_");
  const noControl = replaced.replace(/[\x00-\x1F\x7F]/g, "");
  const noLeadingDots = noControl.replace(/^\.+/, "");
  return noLeadingDots.slice(-200) || "file";
}

function isAllowedMime(type) {
  if (!type) return true;
  const t = String(type).toLowerCase();
  return ALLOWED_MIME_PREFIXES.some((p) => t.startsWith(p));
}

function validSlug(slug) {
  return typeof slug === "string" && /^[a-z0-9][a-z0-9-]{0,63}$/.test(slug);
}

function validSubmissionId(id) {
  return typeof id === "string" && /^[A-Za-z0-9_-]{8,80}$/.test(id);
}

function buildClient() {
  return new S3Client({
    region: "auto",
    endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID,
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
    },
  });
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
    const { slug, submissionId, filename, contentType, size } = body;

    if (!DOC_STORES[type]) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid document type" }) };
    }
    if (!validSlug(slug)) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid slug" }) };
    }
    if (!validSubmissionId(submissionId)) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid submissionId" }) };
    }
    if (!filename) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Missing filename" }) };
    }
    if (typeof size !== "number" || size <= 0 || size > MAX_FILE_BYTES) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: `File size must be between 1 byte and ${MAX_FILE_BYTES} bytes` }) };
    }
    if (!isAllowedMime(contentType)) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "File type not allowed" }) };
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

    const safeName = sanitizeFilename(filename);
    const fileId = crypto.randomUUID();
    const key = `${DOC_PREFIX[type]}/${slug}/${submissionId}/${fileId}-${safeName}`;

    const client = buildClient();
    const command = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: key,
      ContentType: contentType || "application/octet-stream",
    });
    const url = await getSignedUrl(client, command, { expiresIn: URL_TTL_SECONDS });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        url,
        key,
        originalName: safeName,
        expiresIn: URL_TTL_SECONDS,
      }),
    };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
