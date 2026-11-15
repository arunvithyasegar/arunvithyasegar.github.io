# Content plan

Cadence: one writing note every two weeks and one dataset release per month. These are planned releases, not completed work.

| Cycle   | Writing note 1                                                              | Writing note 2                                   | Monthly dataset                                                                                    |
| ------- | --------------------------------------------------------------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| Month 1 | Define ARR and KPI inputs before building a dashboard                       | Turn a KPI view into a board-reporting narrative | Startup KPI dataset: use synthetic data explicitly labelled synthetic, or approved anonymised data |
| Month 2 | Read an agri-commodity price series without confusing seasonality and trend | Document coverage gaps before forecasting        | Agri-commodity market intelligence: confirm commodity, geography, source and licence               |
| Month 3 | Review a pitch deck against its supporting evidence                         | Frame a health-insurance reporting question      | Public health-insurance dataset: confirm source, licence and scope                                 |

## Release checklist

- Set actual dates in the editorial calendar before scheduling. No release dates are implied by this plan.
- Write local notes in `content/writing/` with title, quoted date and description frontmatter. Keep incomplete notes as drafts.
- Add dataset records to `src/data/datasets.ts`; pages and sitemap derive from this register.
- Every dataset page needs Question, Data source, Method, Findings, Code link, Dashboard link and Last updated.
- Record extraction dates, licence, filters, units, limitations and a reproducible source version. Publish findings only when supported by saved outputs.
- Replace the record’s TODO refresh date with the actual refresh date. Do not label the page-edit date as a dataset refresh.
- Configure an optional note download in `WRITING_TEMPLATES` in `src/data/conversion.ts`; place approved files in `public/` and verify the exported link.
- Generate writing share cards with `npm run og`; run format, lint, tests, build and export verification before publishing.
- Cross-link each release from the relevant case study and the writing note. Never publish private client data without permission.
