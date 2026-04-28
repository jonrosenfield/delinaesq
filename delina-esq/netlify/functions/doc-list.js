const { getStore } = require("@netlify/blobs");

const ADMIN_PASSWORD = process.env.INTAKE_ADMIN_PASSWORD || "delina2026";

const STORES = {
  intake: "intake-forms",
  engagement: "engagement-letters",
  sow: "sow-documents",
};

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  if (event.httpMethod === "OPTIONS") return { statusCode: 200, headers, body: "" };

  try {
    const { type, password } = JSON.parse(event.body || "{}");
    if (password !== ADMIN_PASSWORD) {
      return { statusCode: 401, headers, body: JSON.stringify({ error: "Invalid password" }) };
    }
    if (!type || !STORES[type]) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid or missing type" }) };
    }

    const store = getStore({
      name: STORES[type],
      siteID: process.env.NETLIFY_SITE_ID,
      token: process.env.NETLIFY_BLOBS_TOKEN,
    });

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
          url: `https://delina.esq/${type}/${b.key}`,
          passwordProtected,
          created,
        };
      })
    );

    forms.sort((a, b) => (b.created || "").localeCompare(a.created || ""));

    return { statusCode: 200, headers, body: JSON.stringify({ forms, type }) };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
