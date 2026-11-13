# Content and hosting notes

Updated 12 November 2026 from the repository owner's uploaded portfolio analyses and direct instructions.

- Current appointment: Senior Associate, Anna Incubator, joined 5 October 2026 (confirmed in chat).
- Domain: arunvithyasegar.in (confirmed in chat).
- Public email: arun7582@outlook.com (the uploaded README identifies this as the newer personalised address).
- Older employment, education, certifications, and project links come from the owner's pre-template portfolio and the uploaded page analyses.
- Agathium's end date has not been confirmed. Its entry preserves the recorded start date; do not invent an end date or treat it as the primary current role.
- Percentage impact claims and prediction accuracy were removed where the supplied record did not provide a measurement method.
- Current positioning is portfolio-first: show projects, interests, methods, and writing, with a friendly invitation to help. Topic pages are working notes, not a service catalogue or claims of completed client engagements.
- The two new writing pieces are explanatory consulting guides, not historical case studies.
- Public site source is this repository; template attribution remains in LICENSE and README.

## Deployment

The existing GitHub Actions workflow builds a static Next.js export and deploys it to GitHub Pages on main. public/CNAME and package.json homepage must both use arunvithyasegar.in. Canonicals, sitemap, RSS, JSON Resume, and social cards must use that origin too.

GitHub Pages must be configured for GitHub Actions, with the custom domain arunvithyasegar.in. DNS at the registrar must target this account's Pages site. A CNAME file alone does not prove DNS, certificate, or live-host health. Verify the deployed workflow and the actual domain after merging.
