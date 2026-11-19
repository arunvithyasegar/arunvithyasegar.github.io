# Content plan

Optional public writing plan: one note every two weeks and one dataset per month. This supports the professional portfolio; it is not a service offering. Publish only non-confidential work and keep incomplete releases in draft.

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

## Proposed dates (Asia/Kolkata)

These are planning dates, not scheduled publications. Adjust them if evidence or data permissions are not ready.

| Planned release | Type    | Topic                                                                          |
| --------------- | ------- | ------------------------------------------------------------------------------ |
| 2026-11-23      | Note    | KPI definitions before dashboard implementation                                |
| 2026-11-30      | Dataset | Startup KPI reporting worksheet / dataset, with provenance and limitations     |
| 2026-12-07      | Note    | Board-reporting narrative and decision log                                     |
| 2026-12-21      | Note    | Agri-commodity coverage and seasonality                                        |
| 2026-12-31      | Dataset | Agri-commodity market intelligence, subject to source and licence verification |
| 2027-01-04      | Note    | Forecast evaluation against a simple baseline                                  |
| 2027-01-18      | Note    | Health-insurance reporting question and source audit                           |
| 2027-01-31      | Dataset | Public health-insurance dataset, subject to licence and privacy checks         |

Keep a release in draft when its evidence or permission checklist is incomplete.
