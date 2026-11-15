// Public build-time settings only. Never put Google OAuth tokens or provider secrets here.
// Google Calendar: use the shared appointment-schedule URL, not a calendar ID.
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || '';
export const NEWSLETTER_ACTION_URL =
  process.env.NEXT_PUBLIC_NEWSLETTER_ACTION_URL?.trim() || '';
export const NEWSLETTER_EMAIL_FIELD =
  process.env.NEXT_PUBLIC_NEWSLETTER_EMAIL_FIELD?.trim() || 'email';
// Add public provider form identifiers here when required by the chosen endpoint.
export const NEWSLETTER_HIDDEN_FIELDS: Record<string, string> = {};
export const RESUME_PDF_PATH = '/downloads/arun-vithyasegar-resume.pdf';
// TODO: owner-approved starting prices in INR.
export const OFFER_PRICES = { dashboard: '', investor: '', research: '' };
export const WRITING_TEMPLATES: Record<string, string> = {
  'a-board-ready-arr-and-kpi-dashboard':
    '/downloads/kpi-reporting-template.csv',
  'a-pitch-deck-is-a-chain-of-evidence':
    '/downloads/investor-evidence-template.csv',
  'investment-and-impact-assessment-framework':
    '/downloads/investment-review-template.csv',
  'retention-starts-with-a-clear-customer-action':
    '/downloads/retention-review-template.csv',
};
