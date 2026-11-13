# Google Analytics and Substack setup

## Google Tag Manager and GA4

The owner-supplied Google Tag Manager container **GTM-K8J34B3G** loads on
all routes through `src/components/Template/SiteAnalytics.tsx`, mounted once
in the root layout. The existing Next.js third-party integration initialises
`window.dataLayer`, queues the `gtm.start` / `gtm.js` event, and loads the
container asynchronously after hydration. The escaped HTML from chat is not
pasted as literal text, and a separate `gtag()` bootstrap is not needed.

The previous direct GA4 integration and its `NEXT_PUBLIC_GA_TRACKING_ID`
build variable have been removed to avoid installing GA4 twice. Configure
Analytics in the Tag Manager container instead. The GTM ID is public and is
not a GA4 Measurement ID or a Search Console verification token.

### Finish in the Google accounts

1. Open the owner's Tag Manager account and select **GTM-K8J34B3G**.
2. Create or select the GA4 property and web stream for
   `https://arunvithyasegar.in/`; use India time and INR if appropriate.
3. Add a Google tag with the stream's actual `G-…` Measurement ID and the
   appropriate site-wide trigger. Avoid duplicate GA4 configuration tags.
4. Preview using Tag Assistant. Verify the tag, page-view behaviour, and
   consent configuration for the site's actual audience and tags. For this
   Next.js site, test both an initial page load and internal navigation;
   configure GA4 enhanced measurement/history tracking without adding a
   second manual page-view mechanism.
5. Submit and publish the container version, then check GA4 Realtime and
   DebugView. Browser blockers and consent settings can affect collection.

The website installation does not create a GA4 property, publish a container,
verify ownership, or establish that Analytics receives data. Those account
steps have not been performed here. No new custom conversion events have
been added. An email click is not proof an email was sent.

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
