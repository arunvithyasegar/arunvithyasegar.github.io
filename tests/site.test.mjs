import test from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import { execFileSync } from "node:child_process";
const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
test("all local navigation targets exist and IDs are unique", () => {
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(new Set(ids).size, ids.length);
  for (const [, target] of html.matchAll(/href="#([^"]+)"/g))
    assert.ok(ids.includes(target), target);
});
test("site loads only local scripts/styles and includes restrictive policy", () => {
  assert.doesNotMatch(
    html,
    /<script[^>]+src="https?:|<link[^>]+(?:href="https?:[^>]+rel="stylesheet"|rel="stylesheet"[^>]+href="https?:)/,
  );
  assert.match(html, /script-src 'self'/);
  assert.match(html, /upgrade-insecure-requests/);
  assert.doesNotMatch(html, /\son\w+=|href="#"|<form\b/);
});
test("metadata matches custom domain and manifest is valid JSON", async () => {
  const domain = (
    await readFile(new URL("../CNAME", import.meta.url), "utf8")
  ).trim();
  const canonical = html.match(/<link\b[^>]*\brel="canonical"[^>]*>/)?.[0];
  assert.ok(canonical?.includes(`href="https://${domain}/"`));
  for (const file of ["robots.txt", "sitemap.xml"])
    assert.ok(
      (await readFile(new URL(`../${file}`, import.meta.url), "utf8")).includes(
        `https://${domain}/`,
      ),
    );
  const manifest = JSON.parse(
    await readFile(new URL("../site.webmanifest", import.meta.url), "utf8"),
  );
  assert.equal(manifest.icons.length, 2);
});
test("deployment output excludes source, backups and dependencies", async () => {
  execFileSync(process.execPath, ["scripts/build.mjs"]);
  const files = await readdir(new URL("../dist/", import.meta.url));
  for (const forbidden of [
    "node_modules",
    ".git",
    "tests",
    "scripts",
    "work",
    "index.html.backup",
    "package.json",
  ])
    assert.ok(!files.includes(forbidden));
  for (const required of ["index.html", "404.html", "CNAME", ".nojekyll"])
    assert.ok(files.includes(required));
  for (const [, path] of html.matchAll(/(?:src|href)="([^"#:]+)"/g)) {
    if (/^[a-z]+:/i.test(path)) continue;
    assert.ok(
      (await stat(new URL(`../dist/${path}`, import.meta.url))).isFile(),
      path,
    );
  }
});

test("HTTPS redirect preserves paths and only applies to production hosts", async () => {
  const { runInNewContext } = await import("node:vm");
  const script = await readFile(
    new URL("../js/site.js", import.meta.url),
    "utf8",
  );
  for (const [address, expected] of [
    [
      "http://arunvithyasegar.in/path?q=value#projects",
      "https://arunvithyasegar.in/path?q=value#projects",
    ],
    ["http://www.arunvithyasegar.in/", "https://www.arunvithyasegar.in/"],
    ["http://arunvithyasegar.github.io/", "https://arunvithyasegar.github.io/"],
    ["http://localhost:4173/", null],
    ["http://example.com/", null],
    ["https://arunvithyasegar.in/", null],
  ]) {
    const url = new URL(address);
    let redirect = null;
    runInNewContext(script, {
      URL,
      location: {
        protocol: url.protocol,
        hostname: url.hostname,
        href: url.href,
        replace: (value) => {
          redirect = value;
        },
      },
      document: {
        querySelector: (selector) => (selector === "#year" ? {} : null),
        querySelectorAll: () => [],
      },
    });
    assert.equal(redirect, expected, address);
  }
});
