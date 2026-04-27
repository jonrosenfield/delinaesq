const { getStore } = require("@netlify/blobs");
const crypto = require("crypto");

const ADMIN_PASSWORD = process.env.INTAKE_ADMIN_PASSWORD || "delina2026";

function hashPassword(pw) {
  return crypto.createHash("sha256").update(String(pw)).digest("hex");
}

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  if (event.httpMethod === "OPTIONS") return { statusCode: 200, headers, body: "" };
  if (event.httpMethod !== "POST") return { statusCode: 405, headers, body: "Method not allowed" };

  try {
    const { slug, html, password, clientPassword } = JSON.parse(event.body);

    if (password !== ADMIN_PASSWORD) {
      return { statusCode: 401, headers, body: JSON.stringify({ error: "Invalid password" }) };
    }
    if (!slug || !html) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Missing slug or html" }) };
    }

    const safeSlug = slug.toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
    if (!safeSlug) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid slug" }) };
    }

    const metadata = { created: new Date().toISOString() };
    if (clientPassword && String(clientPassword).trim()) {
      metadata.passwordHash = hashPassword(String(clientPassword).trim());
    }

    const store = getStore({
      name: "intake-forms",
      siteID: process.env.NETLIFY_SITE_ID,
      token: process.env.NETLIFY_BLOBS_TOKEN,
    });
    await store.set(safeSlug, html, { metadata });

    const url = `https://delina.esq/intake/${safeSlug}`;
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, url, slug: safeSlug, passwordProtected: !!metadata.passwordHash }),
    };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
