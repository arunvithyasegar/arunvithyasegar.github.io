import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
const domain = (
  await readFile(new URL("../CNAME", import.meta.url), "utf8")
).trim();
const origin = `https://${domain}`;
const failures = [];
try {
  const response = await fetch(`http://${domain}/`, {
    redirect: "manual",
    signal: AbortSignal.timeout(15000),
  });
  assert.ok(
    [301, 302, 307, 308].includes(response.status),
    `HTTP must redirect, got ${response.status}`,
  );
  assert.equal(
    new URL(response.headers.get("location"), `http://${domain}`).protocol,
    "https:",
  );
  console.log("PASS HTTP redirects directly to HTTPS");
} catch (error) {
  failures.push(`HTTPS redirect: ${error.message}`);
}
for (const path of [
  "/",
  "/about/",
  "/resume/",
  "/projects/",
  "/stats/",
  "/contact/",
  "/about.html",
  "/resume.html",
  "/projects.html",
  "/stats.html",
  "/contact.html",
  "/css/site.css",
  "/js/site.js",
]) {
  try {
    let response;
    for (let attempt = 0; attempt < 4; attempt++) {
      response = await fetch(origin + path, {
        signal: AbortSignal.timeout(15000),
      });
      if (![404, 429, 502, 503].includes(response.status) || attempt === 3)
        break;
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
    assert.equal(response.status, 200, `${path} status`);
    assert.equal(new URL(response.url).protocol, "https:");
    let body = await response.text();
    const legacyRedirect = body.match(
      /http-equiv="refresh" content="0;url=(\/#[a-z]+)"/i,
    );
    if (legacyRedirect) {
      const destination = new URL(legacyRedirect[1], origin);
      const finalResponse = await fetch(destination, {
        signal: AbortSignal.timeout(15000),
      });
      assert.equal(finalResponse.status, 200, `${path} redirect destination`);
      body = await finalResponse.text();
    }
    if (path === "/" || path.endsWith("/") || path.endsWith(".html")) {
      assert.ok(
        body.includes('id="projects"'),
        `${path} must serve repaired portfolio`,
      );
      assert.ok(
        body.includes("/js/site.js"),
        `${path} must serve current scripts`,
      );
    }
    console.log(`PASS HTTPS ${path}`);
  } catch (error) {
    failures.push(`${path}: ${error.message} ${error.cause?.code || ""}`);
    // Diagnose insecure content separately; never treat it as an HTTPS pass.
    try {
      const plain = await fetch(`http://${domain}${path}`, {
        redirect: "manual",
        signal: AbortSignal.timeout(15000),
      });
      console.log(`DIAGNOSTIC HTTP ${path}: ${plain.status}`);
    } catch {
      console.log(`DIAGNOSTIC HTTP ${path}: unavailable`);
    }
  }
}
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else console.log("HTTPS redirect and all public pages passed.");
