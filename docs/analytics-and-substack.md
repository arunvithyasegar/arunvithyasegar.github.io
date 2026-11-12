# Google Analytics and Substack setup

## Google Analytics 4

The site already mounts the GA4 integration from `src/components/Template/GoogleAnalytics.tsx`. Tracking stays off when `NEXT_PUBLIC_GA_TRACKING_ID` is unset.

1. Open https://analytics.google.com/ and sign in to the owner's Google account.
2. If needed, create an Analytics account named **Arun Vithyasegar**. Create a GA4 property named **Arun Vithyasegar Website**. Use India time and INR for this India-based consulting site; these settings are adjustable to the owner's preference.
3. Create a **Web** data stream for **https://arunvithyasegar.in/**. Copy its **Measurement ID**, beginning `G-`. The numeric property ID and stream ID do not go in the code.
4. In the GitHub repository, open **Settings → Secrets and variables → Actions → Variables**. Add `NEXT_PUBLIC_GA_TRACKING_ID` with that real Measurement ID. It is a public measurement identifier, not a Google password or API secret.
5. Re-run the CI workflow on `main` to rebuild and publish. The value is embedded at build time.
6. Visit the public site, navigate between pages, and check the GA4 **Realtime** report. Browser tracking protection or local blockers can prevent a test visit from appearing. Verify the stream before considering tracking active.

Do not create a second Analytics account or property if an appropriate one already exists. No Analytics property has been created or connected by these code changes.

## Substack publication

The owner has a Substack account but has not yet created a publication.

Suggested publication name: **Arun Vithyasegar — Strategy, Growth & Data**.

Suggested description: **Practical notes for founders on brand positioning, go-to-market, retention, fundraising preparation, analytics, and useful ML.**

1. Sign in at https://substack.com/ and choose **Create a publication** / **Start writing**.
2. Use the owner's name and the description above, or edit them before publication. Choose an available Substack address; no slug has been reserved or verified by this change.
3. Start with a free publication. Review the publication's title, author profile, and welcome message before publishing. These website changes do not create a publication, accept platform terms, import subscribers, send newsletters, or enable paid subscriptions.
4. Copy the publication homepage URL. Set the GitHub Actions repository variable `NEXT_PUBLIC_SUBSTACK_URL` to that HTTPS URL, then rebuild. This enables subscription invitations on the homepage and `/writing/`; no invitation appears until the URL exists.
5. For a published Substack post to appear in the site's writing lists, add its title, canonical URL, date (`YYYY-MM-DD`), and short description to `src/data/writing.ts`, then publish through a PR. The homepage shows the three newest dated articles and `/writing/` shows the archive.

## How updates work

Local blog posts in `content/writing/` and external entries in `src/data/writing.ts` share the same sorted list. Publishing a repository change automatically rebuilds those lists. Unpublished local drafts remain excluded in production.

Automatic ingestion from Substack RSS is not configured yet. It requires the actual publication URL and a verified feed. The subscription URL alone does not import posts, and it would be misleading to claim that updates are automatic from Substack before testing that connection.
