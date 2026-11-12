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
      'Make it clear who you serve, why they should choose you, and how to explain the value.',
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
      'Turn a broad market opportunity into a focused plan for reaching your first or next customers.',
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
      'Understand where customers drop off and what might bring them back.',
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
      'Build a credible investment story that connects your market, traction, and funding needs.',
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
      'Use the data you already collect to make a specific business decision.',
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
      'Find out whether prediction or classification can solve a business problem with the available data.',
    deliverables: [
      'Problem framing and data-feasibility assessment',
      'Baseline and candidate models with time-aware or held-out evaluation',
      'Error analysis, limitations, and a deployment or next-step recommendation',
    ],
  },
];

export const engagements = [
  {
    title: 'Focused review',
    description:
      'Bring a deck, growth question, brand brief, or dataset. We agree on the question and the review scope, then work through recommendations and next steps.',
  },
  {
    title: 'Defined project',
    description:
      'A scoped deliverable such as a positioning brief, GTM plan, retention analysis, investor deck, dashboard, or model prototype. Scope, fee, milestones, and revisions are agreed before work begins.',
  },
  {
    title: 'Ongoing advisory',
    description:
      'Recurring decision support across strategy and analytics, with an agreed cadence, priorities, and deliverables. Useful when your team needs continuity as it tests and learns.',
  },
];
