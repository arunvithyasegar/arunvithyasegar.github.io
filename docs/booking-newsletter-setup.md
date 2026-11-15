# Booking, newsletter and download setup

## Google Calendar booking

The site uses a Google-hosted appointment schedule so availability checks and event creation stay with Google. Connecting Google Calendar to ChatGPT does not grant the deployed website calendar API access.

1. In Google Calendar, create an Appointment schedule titled “20-minute data and strategy call”. Choose 20 minutes, your actual availability and timezone, notice period and buffers. Review the booking form and meeting location before sharing.
2. Copy the public booking-page link from Share. Do not substitute a calendar ID, calendar subscription URL or event-creation link.
3. Set `NEXT_PUBLIC_BOOKING_URL` in the build environment, then rebuild. Locally copy `.env.example` to `.env.local` and set it there. GitHub Pages uses build-job environment values; Cloudflare uses build environment values. A runtime-only change cannot alter a static export.
4. Open the exported homepage and test selecting an available slot. Until the URL exists, the CTA goes to Contact.

No Google OAuth credentials are required for this hosted booking link. A custom Calendar API booking service is separate work requiring a backend, private token storage and conflict checks.

## Newsletter

Choose a provider with a public HTML POST signup endpoint, subscription confirmation and unsubscribe handling. Copy the form action into `NEXT_PUBLIC_NEWSLETTER_ACTION_URL`. Set `NEXT_PUBLIC_NEWSLETTER_EMAIL_FIELD` to the exact field name expected by the provider. Add any public hidden form identifiers to `NEWSLETTER_HIDDEN_FIELDS` in `src/data/conversion.ts`. Never put provider API secrets into public build variables or form fields.

Use a test address you control to verify submission, confirmation and unsubscribe before announcing the newsletter. Leave the endpoint empty until ready; the site then renders no collection form.

## Downloads

The résumé PDF in `public/downloads/` is generated from the existing `/resume/` page using print CSS, without adding career facts. Review its contents before distributing it. Regenerate it after résumé edits; it does not refresh automatically.

Four CSV worksheets map to the existing local writing slugs in `WRITING_TEMPLATES`. These are blank working templates; TODO cells are intentional and contain no claimed client metrics. Upload any replacement files under `public/downloads/` and update the mapping.

## Evidence and publishing

Use `docs/portfolio-todos.md` for missing factual inputs. The content plan is a draft schedule and creates no calendar events or automatic publication. Data permissions, findings, extraction dates and results must come from actual sources before being marked complete.
