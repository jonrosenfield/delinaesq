const { getStore } = require("@netlify/blobs");

const ADMIN_PASSWORD = process.env.INTAKE_ADMIN_PASSWORD || "delina2026";

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") return { statusCode: 200, headers, body: "" };

  try {
    const { password, submissionId } = JSON.parse(event.body || "{}");
    if (password !== ADMIN_PASSWORD) {
      return { statusCode: 401, headers, body: JSON.stringify({ error: "Invalid password" }) };
    }

    const submissions = getStore({
      name: "intake-submissions",
      siteID: process.env.NETLIFY_SITE_ID,
      token: process.env.NETLIFY_BLOBS_TOKEN,
    });

    if (submissionId) {
      const raw = await submissions.get(submissionId, { type: "text" });
      if (!raw) {
        return { statusCode: 404, headers, body: JSON.stringify({ error: "Submission not found" }) };
      }
      return { statusCode: 200, headers, body: JSON.stringify({ submission: JSON.parse(raw) }) };
    }

    const { blobs } = await submissions.list();
    const summaries = await Promise.all(
      blobs.map(async (b) => {
        try {
          const meta = await submissions.getMetadata(b.key);
          const m = (meta && meta.metadata) || {};
          return {
            submissionId: b.key,
            slug: m.slug || "",
            createdAt: m.createdAt || "",
            fileCount: Number(m.fileCount || 0),
            clientName: m.clientName || "",
            clientEmail: m.clientEmail || "",
          };
        } catch {
          return { submissionId: b.key, slug: "", createdAt: "", fileCount: 0, clientName: "", clientEmail: "" };
        }
      })
    );

    summaries.sort((a, b) => (b.createdAt || "").localeCompare(a.createdAt || ""));

    return { statusCode: 200, headers, body: JSON.stringify({ submissions: summaries }) };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
