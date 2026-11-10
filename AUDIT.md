# Portfolio audit and rework

Date: 2026-11-09. Baseline: d7c6923. Scope: the repository's HTML, styling, browser scripts, TypeScript sources, Python utilities, metadata and Actions workflows; replacement runtime and deployment output. This is a source and local browser audit, not a penetration test or certification.

## Findings and resolution

| Finding | Resolution |
| --- | --- |
| Duplicate HTML metadata, IDs and page sections; conflicting copies of portfolio content | One HTML document, one of each section; preserved the later portfolio sections and all six projects |
| Runtime Tailwind CDN, external fonts/icons, missing local Three.js imports and bare module imports | Replaced with system fonts, local CSS and one small browser script; no runtime third-party dependencies |
| Overlapping inline/legacy/generated JS and CSS; broken Python generator inputs | Removed replaced implementations, backup HTML and utilities requiring missing templates/data; Git retains history |
| Navigation initially hides the portfolio behind JS transitions | Native anchor navigation; readable without JavaScript; skip link and semantic sections |
| Form simulates submission and exposes message data to console | Removed fake form; email link provides an actual contact route |
| Mock GitHub counts, hardcoded estimated commits and expensive age updates | Removed misleading counters and 1ms timers |
| Empty/malformed project links and `href="#"` placeholders | Restored named repository links; unpublished projects explicitly say details are available on request |
| Conflicting static and Jekyll deployment jobs | One static build/deploy workflow; pull requests validate without deploying |
| Entire repository uploaded as public website | Build allowlist publishes only required site files; excludes dependencies, tooling, archives and source backups |
| `.com` metadata conflicts with `.in` CNAME; sitemap lists nonexistent pages | Canonical, Open Graph, robots and sitemap use the configured `.in` domain; sitemap lists the real document |
| Invalid webmanifest and placeholder phone number | Valid JSON manifest; removed placeholder phone number |
| Security policy absent | Local-only scripts/styles/images; disabled connections, objects and form submission; restrictive base URI, referrer policy and insecure-request upgrade |
| HTTPS host handling absent | Client redirect restricted to known production hosts; local HTTP development still works |
| Test command always fails; obsolete dependency | Dependency-free build, real regression checks, no install needed |

## Validation

- `npm run check`: JavaScript syntax, five automated regression tests and public-file build pass.
- Chromium/Playwright: six projects, search matching, empty results, Escape reset, mobile overflow at 375px, keyboard skip link, no-JavaScript content and 404 page pass. No runtime console or page errors.
- axe-core WCAG 2 A/AA and WCAG 2.1 AA scan: zero violations, 22 passing rules. The scanner used a test-only CSP bypass to inject its library; the separate runtime test used the real policy. Automated checks do not replace manual assistive-technology testing.
- Local desktop and mobile screenshots inspected. Test tools are installed only in ignored `work/`, not in the website's dependency graph or deployment artifact.

## Outstanding operational checks

GitHub Pages HTTPS enforcement has **not** been changed or verified. The connected GitHub tools do not expose Pages settings. The interactive browser failed with `the gaas-browser node_repl sandbox cannot be disabled`; the CLI reported an invalid GitHub token. Therefore DNS, certificate issuance, live HTTP redirects, repository Pages source and remote Actions execution remain unverified.

Enable Enforce HTTPS in Pages settings once DNS and certificate checks succeed. Client-side redirect and CSP cannot protect the initial HTTP response. GitHub Pages controls server headers; this change makes no claim to configure HSTS or response-only CSP frame protection.

Existing biography, employment dates, quantified project claims, email domain and social accounts are user-authored content and have not been independently verified. Archived notes and unused image assets are excluded from the public build. Outbound third-party project destinations were preserved, not exhaustively checked for availability. No production deployment has been performed in this session.


## Follow-up repair — 2026-11-10

Remote main was still d7c6923 and its last deployment used the original Jekyll workflow. The earlier local fixes had not reached the live site. The original duplicate cursor declaration, unresolved Three.js module, and null theme-toggle lookup explain the browser crashes recorded during environment setup.

Added real static route entry points for home, about, resume, projects, stats and contact, including `.html` aliases and support for old `#*-page` bookmarks. Restored Stats with counts of documented portfolio entries rather than fabricated live GitHub metrics. Guarded optional script elements against null access.

Added reproducible Playwright checks for 18 direct URLs/bookmarks, refreshes, all navigation links, search, zero-result recovery, keyboard skip link, no-JavaScript content, the 404 page and overflow at 320/375/768/1440px. Both browser suites and all five source/build tests pass locally.

The deployment workflow now requests HTTPS enforcement using its scoped Pages token, reads the setting back, and verifies public redirects plus all supported page routes. This operation depends on GitHub accepting the token permissions and the domain having working DNS and an issued certificate. At publication time, the remote workflow result is still pending; no success is claimed before that result.

Direct live-site verification from this environment is blocked by an explicit network-policy 403 for arunvithyasegar.in. The interactive browser still cannot start and the CLI reports an invalid token. Connected GitHub API tools remain available for repository operations and workflow logs.

### Remote validation results

Commit 43d6ed8 was deployed successfully by GitHub Pages on 2026-11-10. Its build and Playwright checks passed on GitHub's runner. The subsequent HTTPS mutation failed with `Resource not accessible by integration (HTTP 403)`, so the workflow token cannot change Pages administration settings. The evaluated deployment URL was `http://arunvithyasegar.in/`; HTTPS enforcement must not be assumed.

The repository also still triggers GitHub's built-in branch deployment. Compatibility entry files now cover all six routes and `.html` aliases under that mode, using an immediate redirect and accessible link to the corresponding main-page section. Both root-based and generated-artifact deployments pass the full local browser suites. The Actions workflow now checks the HTTPS setting rather than making an unauthorized mutation and runs public URL verification independently even if the setting check fails. Owner/admin action is needed to select GitHub Actions as the Pages source and enable Enforce HTTPS.

Latest automated accessibility scan: zero WCAG 2 A/AA or WCAG 2.1 AA violations, 24 passing rules. Full npm dependency audit, including development packages: zero reported vulnerabilities.
