# Arun V — Personal Site

Portfolio for Arun V, Business & Data Analyst, based on [mldangelo/personal-site](https://github.com/mldangelo/personal-site) (MIT). The Next.js, React, TypeScript, Tailwind, responsive layout, theme controls, and print résumé come from that project; biography, experience, projects, certifications, and contacts come from Arun's existing portfolio.

## Development

Use Node 24 (see `.nvmrc`).

```sh
npm ci
npm run dev
npm run lint
npm run type-check
npm test
npm run build
npm run verify-export
```

Edit `src/data/` for portfolio content. Certifications are in `src/data/resume/certifications.ts`. No upstream articles, talks, employment, or personal statistics are presented as Arun's. The writing route is kept as an empty archive for future posts.

## Deployment

GitHub Actions validates and publishes `out/` on main. In repository Settings → Pages, select GitHub Actions. The canonical domain remains `arunvithyasegar.com`. DNS and Pages settings must already point at this repository. Local changes do not deploy until pushed and merged. Old `.html` routes and `/home/` redirect to their corresponding new pages.

## Migration

The prior static implementation is replaced by one Next.js application. Project dates with only a source year use January 1 internally and display as years. Contact identities are preserved from the existing site. No new personal claims were invented.
