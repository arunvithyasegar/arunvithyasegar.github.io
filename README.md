# Arun Vithyasegar

Personal portfolio at <https://arunvithyasegar.in>.

Senior Associate at Anna Incubator. Sharing projects and notes across strategy, startup growth, organisational performance, investment, impact, and data. Happy to exchange ideas and help where I can.

## Development

Use a supported Node version from `.nvmrc` / `package.json`.

```sh
npm ci
npm run dev
npm run lint
npm run type-check
npm test
npm run build
npm run verify-export
```

Content lives in `src/data/`, with articles in `content/writing/`. Services are in `src/data/services.ts`. Update profile, contact details, résumé, and structured data together; see [content and hosting notes](docs/content-and-hosting.md).

The GitHub Actions workflow deploys the static export to GitHub Pages. `public/CNAME`, `package.json` homepage, and `src/lib/utils.ts` must agree on the production domain. Google Tag Manager container `GTM-K8J34B3G` loads site-wide. Manage GA4 tags inside that container; see `docs/analytics-and-substack.md`.

## Attribution

Built from [Michael D’Angelo’s personal-site](https://github.com/mldangelo/personal-site), used under the MIT license. See [LICENSE](LICENSE). Template credit is separate from Arun's professional biography.
