const { getStore } = require("@netlify/blobs");
const crypto = require("crypto");

function hashPassword(pw) {
  return crypto.createHash("sha256").update(String(pw)).digest("hex");
}

function gatePage(slug, error) {
  const errMsg = error
    ? `<div style="color:#dc3545;font-size:13px;margin-top:-4px;margin-bottom:14px;">Incorrect password. Please try again.</div>`
    : "";
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Protected Intake Form — Delina.ESQ</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:'Inter',-apple-system,BlinkMacSystemFont,'Helvetica Neue',sans-serif;background:#F1EDE6;color:#0A0A0A;min-height:100vh;display:flex;flex-direction:column}
  .top{background:#0A0A0A;color:#F9F7F4;padding:12px 24px;display:flex;justify-content:space-between;align-items:center;font-family:'JetBrains Mono',ui-monospace,SFMono-Regular,Menlo,monospace;font-size:10px;letter-spacing:0.16em;text-transform:uppercase}
  .top .brand{font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;font-size:14pt;letter-spacing:-0.01em;text-transform:none}
  .top .brand span{color:#0047FF}
  .wrap{flex:1;display:flex;align-items:center;justify-content:center;padding:24px}
  .card{max-width:380px;width:100%;background:#F9F7F4;padding:36px 32px;border:1px solid rgba(10,10,10,0.08);text-align:center}
  .eyebrow{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:0.22em;text-transform:uppercase;color:#0047FF;margin-bottom:14px}
  h1{font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;font-weight:400;font-size:30pt;line-height:1.05;margin-bottom:10px}
  p.sub{color:#737373;font-size:13px;margin-bottom:24px;line-height:1.5}
  input{width:100%;border:1px solid #D9D9D9;background:#fff;padding:12px 14px;font-family:inherit;font-size:14px;border-radius:3px;margin-bottom:14px;outline:none}
  input:focus{border-color:#0047FF}
  button{width:100%;background:#0047FF;color:#fff;border:none;font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:0.16em;text-transform:uppercase;padding:13px 20px;border-radius:3px;cursor:pointer}
  button:hover{opacity:0.9}
  .foot{font-size:11px;color:#A3A3A3;margin-top:18px}
  .foot a{color:#0047FF;text-decoration:none}
</style>
</head>
<body>
  <div class="top">
    <div class="brand">Delina<span>.esq</span></div>
    <div>Client Intake</div>
  </div>
  <div class="wrap">
    <div class="card">
      <div class="eyebrow">Protected Form</div>
      <h1>Enter Password</h1>
      <p class="sub">This intake form is password-protected. Please enter the password provided by Delina to continue.</p>
      ${errMsg}
      <form method="POST" action="/intake/${slug}">
        <input type="password" name="password" placeholder="Password" autofocus required>
        <button type="submit">Unlock Form</button>
      </form>
      <div class="foot">Trouble accessing? Email <a href="mailto:delina@delina.esq">delina@delina.esq</a></div>
    </div>
  </div>
</body>
</html>`;
}

async function parseBody(event) {
  if (!event.body) return {};
  const ct = (event.headers["content-type"] || event.headers["Content-Type"] || "").toLowerCase();
  let raw = event.body;
  if (event.isBase64Encoded) raw = Buffer.from(event.body, "base64").toString("utf-8");
  if (ct.includes("application/x-www-form-urlencoded")) {
    const params = new URLSearchParams(raw);
    const out = {};
    for (const [k, v] of params) out[k] = v;
    return out;
  }
  try { return JSON.parse(raw); } catch { return {}; }
}

exports.handler = async (event) => {
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
  if (slug === "admin") return { statusCode: 404, body: "Not found" };

  try {
    const store = getStore({
      name: "intake-forms",
      siteID: process.env.NETLIFY_SITE_ID,
      token: process.env.NETLIFY_BLOBS_TOKEN,
    });
    const result = await store.getWithMetadata(slug, { type: "text" });
    if (!result || !result.data) {
      return {
        statusCode: 404,
        headers: { "Content-Type": "text/html" },
        body: "<h1>Not Found</h1><p>This intake form does not exist or has expired.</p>",
      };
    }
    const html = result.data;
    const passwordHash = result.metadata && result.metadata.passwordHash;

    // No password protection — serve directly
    if (!passwordHash) {
      return {
        statusCode: 200,
        headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-cache" },
        body: html,
      };
    }

    // Password protection — handle gate
    if (event.httpMethod === "POST") {
      const body = await parseBody(event);
      const submitted = body.password ? String(body.password).trim() : "";
      if (submitted && hashPassword(submitted) === passwordHash) {
        return {
          statusCode: 200,
          headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-cache" },
          body: html,
        };
      }
      return {
        statusCode: 401,
        headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-cache" },
        body: gatePage(slug, true),
      };
    }

    // GET on a protected form — show gate
    return {
      statusCode: 200,
      headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-cache" },
      body: gatePage(slug, false),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "text/html" },
      body: "<h1>Error</h1><p>Something went wrong loading this form.</p>",
    };
  }
};
