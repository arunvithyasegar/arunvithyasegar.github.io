/** Illustrative working methods, not claims of completed client deliverables. */
export const capabilityExamples: Record<
  string,
  { question: string; approach: string; output: string }
> = {
  dashboard: {
    question: 'Which numbers explain what changed?',
    approach:
      'Reconcile sources, agree on KPI definitions and compare performance over a consistent reporting period.',
    output:
      'A metric dictionary, dashboard and a concise explanation of material changes.',
  },
  research: {
    question: 'Where is a closer look worthwhile?',
    approach:
      'Compare sectors, companies and market signals while recording source dates, gaps and assumptions.',
    output:
      'A research brief, company landscape and questions for further validation.',
  },
  programme: {
    question: 'How does an application move towards a decision?',
    approach:
      'Organise screening criteria, founder information, review stages and follow-ups so the next action is clear.',
    output:
      'An evaluation checklist, application tracker and review-ready startup profile.',
  },
  monitoring: {
    question: 'What needs attention before the next review?',
    approach:
      'Connect milestones to owners, dates and evidence; separate progress from activity and surface unresolved dependencies.',
    output:
      'A milestone tracker, exception summary and management review note.',
  },
  analysis: {
    question: 'What should change in the workflow?',
    approach:
      'Map the current process, clarify user needs and turn them into requirements that can be checked.',
    output:
      'A process map, requirements document and acceptance criteria for UAT.',
  },
};

export const relatedMethods = [
  {
    id: 'brand',
    title: 'Company positioning',
    description:
      'Research audiences, alternatives and the evidence behind a company’s value proposition.',
    href: '/services/growth-revenue-metrics/',
    label: 'Explore growth and market questions',
  },
  {
    id: 'gtm',
    title: 'Market entry research',
    description:
      'Map customer segments, market context and questions for further evaluation.',
    href: '/projects/un-trade/',
    label: 'Explore the trade analysis project',
  },
  {
    id: 'retention',
    title: 'Cohort analysis',
    description:
      'Define activation, repeat behaviour and the observation window before interpreting retention.',
    href: '/writing/retention-starts-with-a-clear-customer-action/',
    label: 'Read the retention note',
  },
  {
    id: 'fundraising',
    title: 'Investment evidence',
    description:
      'Separate claims, assumptions and supporting evidence in investment materials.',
    href: '/writing/a-pitch-deck-is-a-chain-of-evidence/',
    label: 'Read the pitch deck note',
  },
  {
    id: 'analytics',
    title: 'Data quality and KPI definitions',
    description:
      'Validate sources, definitions and reporting periods before comparing performance.',
    href: '/writing/a-board-ready-arr-and-kpi-dashboard/',
    label: 'Read the ARR and KPI note',
  },
  {
    id: 'ml',
    title: 'Forecast evaluation',
    description:
      'Compare analytical models with a simple baseline and document their limitations.',
    href: '/projects/',
    label: 'Explore analytical projects',
  },
];
