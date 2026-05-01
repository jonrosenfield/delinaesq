const { getStore } = require("@netlify/blobs");

const ADMIN_PASSWORD = process.env.INTAKE_ADMIN_PASSWORD || "delina2026";

const STORES = {
  intake: "intake-forms",
  engagement: "engagement-letters",
  sow: "sow-documents",
  operating: "operating-agreements",
};

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  if (event.httpMethod === "OPTIONS") return { statusCode: 200, headers, body: "" };
  if (event.httpMethod !== "POST") return { statusCode: 405, headers, body: "Method not allowed" };

  try {
    const { type, slug, password } = JSON.parse(event.body || "{}");
    if (password !== ADMIN_PASSWORD) {
      return { statusCode: 401, headers, body: JSON.stringify({ error: "Invalid password" }) };
    }
    if (!type || !STORES[type]) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid or missing type" }) };
    }
    if (!slug) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Missing slug" }) };
    }

    const store = getStore({
      name: STORES[type],
      siteID: process.env.NETLIFY_SITE_ID,
      token: process.env.NETLIFY_BLOBS_TOKEN,
    });
    await store.delete(slug);

    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
