const { getStore } = require("@netlify/blobs");

const ADMIN_PASSWORD = process.env.INTAKE_ADMIN_PASSWORD || "delina2026";

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  if (event.httpMethod === "OPTIONS") return { statusCode: 200, headers, body: "" };

  try {
    const { password } = JSON.parse(event.body || "{}");
    if (password !== ADMIN_PASSWORD) {
      return { statusCode: 401, headers, body: JSON.stringify({ error: "Invalid password" }) };
    }

    const store = getStore({
      name: "intake-forms",
      siteID: process.env.NETLIFY_SITE_ID,
      token: process.env.NETLIFY_BLOBS_TOKEN,
    });

    // List with metadata so we can flag password-protected forms
    const { blobs } = await store.list();

    const forms = await Promise.all(
      blobs.map(async (b) => {
        let passwordProtected = false;
        let created = null;
        try {
          const meta = await store.getMetadata(b.key);
          if (meta && meta.metadata) {
            passwordProtected = !!meta.metadata.passwordHash;
            created = meta.metadata.created || null;
          }
        } catch {}
        return {
          slug: b.key,
          url: `https://delina.esq/intake/${b.key}`,
          passwordProtected,
          created,
        };
      })
    );

    // Sort newest first
    forms.sort((a, b) => (b.created || "").localeCompare(a.created || ""));

    return { statusCode: 200, headers, body: JSON.stringify({ forms }) };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
