import { cp, mkdir, rm, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
const root = new URL("../", import.meta.url);
const dist = new URL("dist/", root);
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
// Explicit allowlist keeps source, tooling, dependencies and backups off Pages.
for (const path of [
  "index.html",
  "404.html",
  "css",
  "js",
  "favicon.ico",
  "icon-192x192.png",
  "icon-512x512.png",
  "site.webmanifest",
  "robots.txt",
  "sitemap.xml",
  "CNAME",
  ".nojekyll",
]) {
  await cp(new URL(path, root), new URL(path, dist), { recursive: true });
}
const html = await readFile(new URL("index.html", root), "utf8");
// Real static entry points avoid relying on SPA fallback behavior in GitHub Pages.
for (const route of [
  "home",
  "about",
  "resume",
  "projects",
  "stats",
  "contact",
]) {
  const directory = new URL(`${route}/`, dist);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL("index.html", directory), html);
  await writeFile(new URL(`${route}.html`, dist), html);
}
console.log(`Static site built at ${fileURLToPath(dist)}`);
