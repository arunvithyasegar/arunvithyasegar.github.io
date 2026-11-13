export interface Service {
  id: string;
  title: string;
  problem: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    id: 'brand',
    title: 'Brand strategy & positioning',
    problem:
      'Understanding an audience, the alternatives available to them, and how an idea’s value can be explained clearly.',
    deliverables: [
      'Audience and competitor review',
      'Positioning and value proposition brief',
      'Messaging framework for your website, sales conversations, and launch',
    ],
  },
  {
    id: 'gtm',
    title: 'Go-to-market strategy',
    problem:
      'Exploring customer segments, routes to market, and the experiments that can test a launch assumption.',
    deliverables: [
      'Ideal customer profile and segment priorities',
      'Channel hypotheses, offer, and launch sequence',
      'Experiment backlog with owners, measures, and decision points',
    ],
  },
  {
    id: 'retention',
    title: 'Retention & growth models',
    problem:
      'Looking at activation, repeat behaviour, cohorts, and the reasons people return—or leave.',
    deliverables: [
      'Activation and funnel review',
      'Cohort analysis and repeat-use or churn hypotheses',
      'Lifecycle experiments and a retention measurement plan',
    ],
  },
  {
    id: 'fundraising',
    title: 'Pitch decks & fundraising strategy',
    problem:
      'Thinking through the connection between a customer problem, market evidence, traction, and a funding narrative.',
    deliverables: [
      'Pitch narrative and deck structure',
      'Market-sizing and financial-assumption review',
      'Fundraising roadmap, use-of-funds logic, and investor Q&A preparation',
    ],
  },
  {
    id: 'analytics',
    title: 'Data analysis & dashboards',
    problem:
      'Turning a question into an analysis with SQL, Python, or Power BI, then making the result understandable.',
    deliverables: [
      'Data-quality review and metric definitions',
      'SQL or Python analysis and Power BI reporting',
      'Decision memo, documented calculations, and handover',
    ],
  },
  {
    id: 'ml',
    title: 'Practical machine learning',
    problem:
      'Testing whether forecasting or classification adds something useful beyond a simple baseline.',
    deliverables: [
      'Problem framing and data-feasibility assessment',
      'Baseline and candidate models with time-aware or held-out evaluation',
      'Error analysis, limitations, and a deployment or next-step recommendation',
    ],
  },
];
