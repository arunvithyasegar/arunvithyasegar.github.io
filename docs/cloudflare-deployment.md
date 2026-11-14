# Cloudflare static deployment

## What failed

The supplied 14 November 2026 log shows `npm run build` succeeding. The deploy
command, `npx wrangler deploy`, found no Wrangler configuration and detected
Next.js. It auto-migrated the checkout to OpenNext and ran a second build.
OpenNext then failed looking for `.next/standalone/.next/server/pages-manifest.json`.

This repository deliberately uses Next.js `output: 'export'`. Its deployable
output is `out/`, not an OpenNext or standalone server bundle. No SSR adapter,
cache bindings, or Worker application entry point is needed.

## Workers Builds settings for this project

| Setting           | Value                                       |
| ----------------- | ------------------------------------------- |
| Repository        | `arunvithyasegar/arunvithyasegar.github.io` |
| Production branch | `main`                                      |
| Root directory    | `/` (repository root)                       |
| Build command     | `npm run build`                             |
| Deploy command    | `npm run deploy:cloudflare`                 |
| Worker name       | `arunvithyasegar-github-io`                 |
| Node              | Respect `.nvmrc` (26)                       |

`wrangler.jsonc` specifies `assets.directory: './out'`, forces canonical
trailing slashes, and serves the exported `404.html` for unknown paths with
404 status. It contains no server build command, so the site is built once.
`npm run deploy:cloudflare` verifies the export before calling the pinned
Wrangler CLI. The old `npx wrangler deploy` command also reads the tracked
configuration and local pinned Wrangler, but the named npm script adds the
export gate and is the preferred dashboard setting.

Keep the existing Cloudflare build token within Cloudflare. Do not put account
credentials in the repository or chat. No new Cloudflare token is required for
local dry-run validation.

## Local verification

```sh
npm ci
npm run build
npm run verify-export
npm run check:cloudflare
npm run preview:cloudflare
```

The preview is available at `http://localhost:8787` on the machine running it.
Check the homepage, `/stats/`, a nested article, `/sitemap.xml`, `/resume.json`,
and an unknown path. The unknown path must be a genuine 404, not an SPA fallback.
The dry run validates packaging without publishing or changing Cloudflare.
CI runs it on the Linux deployment-candidate build.

## After merging

Let the connected Workers Builds project build the latest `main` commit, or
select Retry build after confirming the commit. Update the dashboard commands
to the values above if necessary. A good log should show a single Next.js
static build and Wrangler deploying assets from `out/`. It should not run
`@opennextjs/cloudflare migrate` or `opennextjs-cloudflare build`.

If an old OpenNext command persists, inspect the project's saved deploy command
and retry without the old build cache. Do not change `output: 'export'` to work
around the missing server manifest.

## Hosting and verification boundaries

This adds a Cloudflare deployment path while retaining GitHub Pages. It does
not change DNS, nameservers, custom-domain routes, or the canonical origin
`https://arunvithyasegar.in/`. Cloudflare account deployment success must be
confirmed from Workers Builds or a deployment URL; a local dry run and a
successful GitHub Pages deployment do not establish Cloudflare success.

If using an actual **Cloudflare Pages** project instead of this **Workers
Builds** project, use build command `npm run build` and output directory `out`.
Pages manages publishing; do not apply the Workers deploy-command setup to it.

References:

- https://developers.cloudflare.com/workers/static-assets/binding/
- https://developers.cloudflare.com/workers/static-assets/routing/advanced/html-handling/
