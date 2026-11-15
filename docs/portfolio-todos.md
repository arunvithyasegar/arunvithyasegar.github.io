# Portfolio owner checklist

All results marked TODO are unpublished evidence slots. The proposed case-study approaches are templates, not claims of delivered work.

## Conversion configuration — `src/data/conversion.ts`

- [ ] `NEXT_PUBLIC_BOOKING_URL`: Google Calendar appointment-schedule URL for the 20-minute call. Empty currently falls back to Contact.
- [ ] `OFFER_PRICES.dashboard`: approved starting price in INR for the KPI / ARR setup.
- [ ] `OFFER_PRICES.investor`: approved starting price in INR for the investor review.
- [ ] `OFFER_PRICES.research`: approved starting price in INR for the research brief.
- [ ] `NEXT_PUBLIC_NEWSLETTER_ACTION_URL`: provider POST endpoint. Confirm it accepts an `email` field and provides unsubscribe handling. Set `NEXT_PUBLIC_NEWSLETTER_EMAIL_FIELD` and `NEWSLETTER_HIDDEN_FIELDS` for provider-specific identifiers; add consent fields if the provider requires them. Empty means no form is rendered.
- [x] Generate and configure a PDF from the existing résumé at `/downloads/arun-vithyasegar-resume.pdf`.
- [ ] Owner review of the generated résumé before distribution.
- [x] Create four blank CSV worksheets and map them to all four existing local writing slugs.

## Service scope — `src/data/offers.ts`

- [ ] Confirm investor-review timeline.
- [ ] Confirm research-brief timeline.

## Case-study evidence — `src/data/caseStudies.ts`

For both the startup / incubator KPI dashboard and agri-commodity flagship:

- [ ] Confirm actual problem, context and permission to disclose.
- [ ] Replace proposed approach with work actually completed.
- [ ] Confirm tools and sources actually used.
- [ ] Add verified results: baseline, outcome, units, observation period and supporting evidence. Do not use illustrative metrics as actual results.
- [ ] Confirm the next step based on the evidence.

For the agri-commodity flagship also confirm commodity, geography, decision owner, source licence and next release question.

## Hiring evidence — `app/hire/page.tsx`

- [ ] Reporting win: baseline, outcome, unit, period, personal contribution and source.
- [ ] Analysis win: decision supported, measured outcome, period and source.
- [ ] Delivery win: measured time / quality improvement, baseline, period and source.

## Dataset records — `src/data/datasets.ts`

- [ ] News Sentiment: extraction dates, query filters, source coverage and licence.
- [ ] UN Trade: extraction date, query and source version.
- [ ] Both records: findings supported by saved outputs, with units, observation window and limitations.
- [ ] Both records: actual dataset refresh date (not the page-edit date).

## Publishing — `docs/content-plan.md`

- [ ] Assign real release dates before scheduling notes or datasets.
- [ ] Confirm data access, licence and privacy clearance for each planned dataset.
- [ ] Add future dataset records using the existing schema and generate writing share cards for new local notes.
