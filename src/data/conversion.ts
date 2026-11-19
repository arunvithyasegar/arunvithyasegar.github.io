// Public newsletter and download settings. Never store private credentials here.
export const NEWSLETTER_ACTION_URL =
  process.env.NEXT_PUBLIC_NEWSLETTER_ACTION_URL?.trim() || '';
export const NEWSLETTER_EMAIL_FIELD =
  process.env.NEXT_PUBLIC_NEWSLETTER_EMAIL_FIELD?.trim() || 'email';
// Add public provider form identifiers here when required by the chosen endpoint.
export const NEWSLETTER_HIDDEN_FIELDS: Record<string, string> = {};
export const RESUME_PDF_PATH = '/downloads/arun-vithyasegar-resume.pdf';
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
