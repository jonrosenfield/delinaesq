const { getStore } = require("@netlify/blobs");
const { S3Client, DeleteObjectsCommand } = require("@aws-sdk/client-s3");

const ADMIN_PASSWORD = process.env.INTAKE_ADMIN_PASSWORD || "delina2026";

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
    const { password, submissionId } = JSON.parse(event.body || "{}");
    if (password !== ADMIN_PASSWORD) {
      return { statusCode: 401, headers, body: JSON.stringify({ error: "Invalid password" }) };
    }
    if (!submissionId || typeof submissionId !== "string") {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Missing submissionId" }) };
    }

    const submissions = getStore({
      name: "intake-submissions",
      siteID: process.env.NETLIFY_SITE_ID,
      token: process.env.NETLIFY_BLOBS_TOKEN,
    });

    const raw = await submissions.get(submissionId, { type: "text" });
    if (!raw) {
      return { statusCode: 404, headers, body: JSON.stringify({ error: "Submission not found" }) };
    }
    const record = JSON.parse(raw);
    const fileKeys = (record.files || [])
      .map((f) => f && f.key)
      .filter((k) => typeof k === "string" && /^(intakes|engagements|sows)\//.test(k));

    if (fileKeys.length > 0) {
      const client = buildClient();
      // R2 supports up to 1000 keys per DeleteObjects request; submissions cap is 25.
      await client.send(
        new DeleteObjectsCommand({
          Bucket: process.env.R2_BUCKET_NAME,
          Delete: { Objects: fileKeys.map((Key) => ({ Key })), Quiet: true },
        })
      );
    }

    await submissions.delete(submissionId);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, deletedFiles: fileKeys.length }),
    };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
