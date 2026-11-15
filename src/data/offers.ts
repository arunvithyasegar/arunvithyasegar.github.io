import { OFFER_PRICES } from './conversion';
export const offers = [
  {
    id: 'dashboard',
    title: 'KPI / ARR Dashboard Setup',
    audience:
      'Founders and incubator teams consolidating recurring revenue and portfolio reporting.',
    deliverables: [
      'Metric dictionary and source audit',
      'KPI / ARR dashboard with documented calculations',
      'Board-reporting view and handover guide',
    ],
    timeline: '2 weeks',
    price: OFFER_PRICES.dashboard,
  },
  {
    id: 'investor',
    title: 'Investor-Readiness Review',
    audience: 'Startup founders preparing for investor meetings.',
    deliverables: [
      'Annotated deck review and narrative gaps',
      'Traction metrics and assumption checks',
      'Investor Q&A preparation and action memo',
    ],
    timeline: 'TODO: confirm review timeline',
    price: OFFER_PRICES.investor,
  },
  {
    id: 'research',
    title: 'Market / Ecosystem Research Brief',
    audience:
      'Agri-tech, health-insurance and ecosystem teams assessing a market or partner landscape.',
    deliverables: [
      'Decision question and source register',
      'Market / ecosystem map with evidence and limitations',
      'Research brief with recommendations and next questions',
    ],
    timeline: 'TODO: confirm research timeline',
    price: OFFER_PRICES.research,
  },
];
