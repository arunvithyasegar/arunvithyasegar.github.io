import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
const domain = (
  await readFile(new URL("../CNAME", import.meta.url), "utf8")
).trim();
const origin = `https://${domain}`;
const http = await fetch(`http://${domain}/`, {
  redirect: "manual",
  signal: AbortSignal.timeout(15000),
});
assert.ok(
  [301, 302, 307, 308].includes(http.status),
  `HTTP must redirect, got ${http.status}`,
);
assert.equal(
  new URL(http.headers.get("location"), `http://${domain}`).protocol,
  "https:",
  "HTTP must redirect directly to HTTPS",
);
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
  let lastError;
  for (let attempt = 0; attempt < 6; attempt++) {
    try {
      const response = await fetch(origin + path, {
        signal: AbortSignal.timeout(15000),
      });
      assert.equal(response.status, 200, `${path} status`);
      assert.equal(new URL(response.url).protocol, "https:");
      const body = await response.text();
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
      console.log(`PASS ${path}`);
      lastError = null;
      break;
    } catch (error) {
      lastError = error;
      if (attempt < 5)
        await new Promise((resolve) => setTimeout(resolve, 10000));
    }
  }
  if (lastError) throw lastError;
}
console.log("HTTPS redirect and all public pages passed.");
