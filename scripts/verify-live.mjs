import assert from 'node:assert/strict';
import { setTimeout } from 'node:timers/promises';
import { canonicalValues } from './lib/html.mjs';
import { readSiteConfig } from './lib/site.mjs';

const { origin, basePath } = readSiteConfig(process.cwd(), 'verify-live');
const site = `${origin}${basePath}`;
const pages = new Map([
  ['/', 'id="home-headline"'],
  ['/services/', 'id="capabilities"'],
  ['/case-studies/', 'Public project examples'],
  ['/hire/', 'Download resume (PDF)'],
  ['/projects/', 'Monthly dataset'],
  ['/writing/', 'Writing'],
  ['/contact/', 'programme operations or enterprise development'],
]);
const downloads = [
  'arun-vithyasegar-resume.pdf',
  'kpi-reporting-template.csv',
  'investor-evidence-template.csv',
  'investment-review-template.csv',
  'retention-review-template.csv',
];

async function request(path) {
  const url = new URL(`${site}${path}`);
  // Avoid a stale CDN response while checking a just-completed deployment.
  url.searchParams.set('deployment-check', process.env.GITHUB_SHA || 'manual');
  return fetch(url, {
    signal: AbortSignal.timeout(20000),
    headers: { 'Cache-Control': 'no-cache' },
  });
}

async function checkLive() {
  for (const [path, expected] of pages) {
    const response = await request(path);
    assert.equal(response.status, 200, `${path}: HTTP ${response.status}`);
    assert.match(response.headers.get('content-type') || '', /text\/html/i);
    const html = await response.text();
    assert.ok(html.includes(expected), `${path}: expected content missing`);
    assert.ok(html.includes('Skip to content'), `${path}: skip link missing`);
    assert.deepEqual(canonicalValues(html), [`${site}${path}`]);
    console.log(`PASS ${path}`);
  }
  for (const name of downloads) {
    const response = await request(`/downloads/${name}`);
    assert.equal(response.status, 200, `${name}: HTTP ${response.status}`);
    const body = await response.text();
    assert.ok(
      name.endsWith('.pdf')
        ? body.startsWith('%PDF-')
        : body.startsWith('metric,') ||
            body.startsWith('slide,') ||
            body.startsWith('decision_question,') ||
            body.startsWith('customer_segment,'),
      `${name}: unexpected file contents`,
    );
    console.log(`PASS /downloads/${name}`);
  }
  const sitemap = await request('/sitemap.xml');
  assert.equal(sitemap.status, 200);
  const xml = await sitemap.text();
  for (const path of [
    '/hire/',
    '/case-studies/',
    '/projects/news-sentiment/',
  ]) {
    assert.ok(xml.includes(`${site}${path}`), `Sitemap is missing ${path}`);
  }
  assert.equal(
    (await request('/__deployment-check-missing-page__/')).status,
    404,
  );
  console.log('PASS sitemap and real HTTP 404');
}

for (let attempt = 1; attempt <= 6; attempt += 1) {
  try {
    await checkLive();
    console.log(`verify-live: ${site} passed all live checks`);
    break;
  } catch (error) {
    console.error(`Attempt ${attempt}/6: ${error.message}`);
    if (attempt === 6) process.exit(1);
    await setTimeout(10000);
  }
}
