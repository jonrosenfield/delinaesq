const { getStore } = require("@netlify/blobs");

exports.handler = async (event) => {
  // Extract slug from path: /intake/coffee-boy -> coffee-boy
  const path = event.path || event.rawUrl || "";
  const match = path.match(/\/intake\/([a-z0-9-]+)/);

  if (!match) {
    return {
      statusCode: 404,
      headers: { "Content-Type": "text/html" },
      body: "<h1>Not Found</h1><p>No intake form found at this URL.</p>",
    };
  }

  const slug = match[1];

  // Don't handle "admin" — let it fall through to the static file
  if (slug === "admin") {
    return { statusCode: 404, body: "Not found" };
  }

  try {
    const store = getStore({
      name: "intake-forms",
      siteID: process.env.NETLIFY_SITE_ID,
      token: process.env.NETLIFY_BLOBS_TOKEN,
    });
    const html = await store.get(slug, { type: "text" });

    if (!html) {
      return {
        statusCode: 404,
        headers: { "Content-Type": "text/html" },
        body: "<h1>Not Found</h1><p>This intake form does not exist or has expired.</p>",
      };
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-cache",
      },
      body: html,
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "text/html" },
      body: "<h1>Error</h1><p>Something went wrong loading this form.</p>",
    };
  }
};
