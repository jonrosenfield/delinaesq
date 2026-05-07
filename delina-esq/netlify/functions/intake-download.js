const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const ADMIN_PASSWORD = process.env.INTAKE_ADMIN_PASSWORD || "delina2026";
const URL_TTL_SECONDS = 300; // 5 minutes

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
    const { password, key, downloadName } = JSON.parse(event.body || "{}");
    if (password !== ADMIN_PASSWORD) {
      return { statusCode: 401, headers, body: JSON.stringify({ error: "Invalid password" }) };
    }
    if (!key || typeof key !== "string" || !/^(intakes|engagements|sows|operating|uploads)\//.test(key)) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid key" }) };
    }

    const client = buildClient();
    const safeName = String(downloadName || "download").replace(/["\\]/g, "");
    const command = new GetObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: key,
      ResponseContentDisposition: `attachment; filename="${safeName}"`,
    });
    const url = await getSignedUrl(client, command, { expiresIn: URL_TTL_SECONDS });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ url, expiresIn: URL_TTL_SECONDS }),
    };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
