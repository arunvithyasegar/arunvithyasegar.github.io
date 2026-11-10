# Arun V — portfolio

A responsive, static portfolio with local CSS and JavaScript. The about, resume, certifications and six projects remain available without JavaScript. Search progressively enhances the project list. Contact uses a real email link; no form delivery is simulated.

## Develop and validate

Node.js 22 or later is sufficient for the build; the site has no runtime dependencies. Playwright is a development dependency used for browser checks.

```sh
npm ci
npm run check
npx playwright install chromium
npm run test:browser
python -m http.server 4173 --directory dist
```

Edit `index.html`, `css/site.css` and `js/site.js`. `npm run build` recreates `dist/` from an explicit public-file allowlist. Never deploy the repository root. Tests check navigation, security policy, metadata, local resources and deployment exclusions.

Direct URLs `/home/`, `/about/`, `/resume/`, `/projects/`, `/stats/`, `/contact/` and their `.html` aliases are generated as real static files. Older `#about-page` style bookmarks also work.

## Deploy and enforce HTTPS

The single Pages workflow validates pull requests and deploys `dist/` on pushes to `main`. It then enables Pages HTTPS through the GitHub API, reads the setting back, and checks public HTTPS redirects and every supported page URL. DNS or certificate failures are surfaced as workflow failures. In GitHub Settings → Pages, use **GitHub Actions** as the build source. The custom domain is `arunvithyasegar.in`, matching `CNAME`, the canonical URL, robots and sitemap.

1. Confirm the domain's DNS points to GitHub Pages using GitHub's current custom-domain instructions.
2. Wait for GitHub to issue the TLS certificate and finish its DNS check.
3. Enable **Enforce HTTPS** at <https://github.com/arunvithyasegar/arunvithyasegar.github.io/settings/pages>.
4. Verify an HTTP request redirects to HTTPS and the HTTPS site has a valid certificate, including any configured `www` alias.

The client redirect and `upgrade-insecure-requests` policy are defense in depth; they do not replace the server-side Pages setting. GitHub Pages does not support custom response headers from a `_headers` file. HSTS and response-only CSP directives require hosting or a proxy that supports them.

The contact address and existing social identities are preserved from the source; confirm that they remain current. `docs/history/` contains superseded implementation notes and is excluded from deployment. See `AUDIT.md` for findings and verification limits.
