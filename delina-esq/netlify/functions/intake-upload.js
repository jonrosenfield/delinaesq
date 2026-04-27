const { getStore } = require("@netlify/blobs");

const ADMIN_PASSWORD = process.env.INTAKE_ADMIN_PASSWORD || "delina2026";

exports.handler = async (event) => {
  // CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: "Method not allowed" };
  }

  try {
    const { slug, html, password } = JSON.parse(event.body);

    // Auth check
    if (password !== ADMIN_PASSWORD) {
      return { statusCode: 401, headers, body: JSON.stringify({ error: "Invalid password" }) };
    }

    if (!slug || !html) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Missing slug or html" }) };
    }

    // Sanitize slug
    const safeSlug = slug.toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");

    if (!safeSlug) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid slug" }) };
    }

    // Store the HTML in Netlify Blobs
    const store = getStore("intake-forms");
    await store.set(safeSlug, html, { metadata: { created: new Date().toISOString() } });

    const url = `https://delina.esq/intake/${safeSlug}`;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, url, slug: safeSlug }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
