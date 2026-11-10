import test from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname } from "node:path";
import { chromium } from "playwright";

const server = createServer(async (request, response) => {
  try {
    let path = join(
      process.cwd(),
      "dist",
      decodeURIComponent(new URL(request.url, "http://localhost").pathname),
    );
    if ((await stat(path)).isDirectory()) path = join(path, "index.html");
    response.setHeader(
      "Content-Type",
      {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
        ".png": "image/png",
        ".ico": "image/x-icon",
        ".webmanifest": "application/manifest+json",
      }[extname(path)] || "text/plain",
    );
    response.end(await readFile(path));
  } catch {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end(await readFile("dist/404.html"));
  }
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const base = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch(
  process.env.BROWSER_EXECUTABLE
    ? { executablePath: process.env.BROWSER_EXECUTABLE }
    : {},
);
const routes = ["home", "about", "resume", "projects", "stats", "contact"];

test.after(async () => {
  await browser.close();
  await new Promise((resolve) => server.close(resolve));
});

test("every page URL, HTML alias, bookmark, refresh and navigation link works", async () => {
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  for (const route of routes) {
    for (const suffix of [`/${route}/`, `/${route}.html`, `/#${route}-page`]) {
      const response = await page.goto(base + suffix);
      assert.equal(response.status(), 200, suffix);
      await page.locator(`#${route}`).waitFor({ state: "visible" });
      assert.ok(
        await page.locator(`#${route}`).evaluate((element) => {
          const r = element.getBoundingClientRect();
          return r.top < innerHeight && r.bottom > 0;
        }),
        `${suffix} opens correct section`,
      );
      await page.reload();
      assert.ok(await page.locator(`#${route}`).isVisible());
    }
  }
  await page.goto(base);
  for (const route of routes.filter((route) => route !== "home")) {
    await page.locator(`nav a[href="#${route}"]`).click();
    await page.waitForURL(`**/#${route}`);
    await page.waitForFunction(
      (id) =>
        document.getElementById(id).getBoundingClientRect().top < innerHeight,
      route,
    );
  }
  assert.deepEqual(errors, []);
  await page.close();
});

test("search, mobile layouts, no JavaScript and unknown pages remain usable", async () => {
  const page = await browser.newPage();
  await page.goto(base);
  assert.equal(await page.locator(".project-card:visible").count(), 6);
  await page.locator("#project-search").fill("Power BI");
  assert.equal(await page.locator(".project-card:visible").count(), 1);
  await page.locator("#project-search").fill("nonexistent-search-result");
  assert.equal(await page.locator(".project-card:visible").count(), 0);
  assert.match(
    await page.locator("#project-count").textContent(),
    /No projects match/,
  );
  await page.locator("#project-search").press("Escape");
  assert.equal(await page.locator(".project-card:visible").count(), 6);
  for (const width of [320, 375, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    assert.ok(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      `no overflow at ${width}px`,
    );
  }
  await page.reload();
  await page.keyboard.press("Tab");
  assert.equal(await page.locator(":focus").textContent(), "Skip to content");
  const context = await browser.newContext({ javaScriptEnabled: false });
  const plain = await context.newPage();
  await plain.goto(base + "/projects/");
  assert.equal(await plain.locator(".project-card:visible").count(), 6);
  assert.equal(await plain.locator(".project-tools").isVisible(), false);
  const response = await plain.goto(base + "/not-a-real-page");
  assert.equal(response.status(), 404);
  assert.ok(await plain.locator('a[href="/"]').isVisible());
  await context.close();
  await page.close();
});
