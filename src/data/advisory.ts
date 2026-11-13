/** Personal focus notes and approaches; not an offering catalogue or a record of completed mandates. */
export interface AdvisoryArea {
  slug: string;
  title: string;
  seoTitle: string;
  summary: string;
  audience: string;
  question: string;
  answer: string;
  situations: string[];
  deliverables: string[];
  inputs: string[];
  steps: string[];
  faqs: { question: string; answer: string }[];
  article: string;
}
export const advisoryAreas: AdvisoryArea[] = [
  {
    slug: 'growth-revenue-metrics',
    title: 'Growth & revenue metrics',
    seoTitle: 'ARR, Retention & Growth Metrics',
    summary:
      'How I think about ARR, retention, acquisition costs, and unit economics when making sense of business growth.',
    audience:
      'I’m interested in what recurring-revenue metrics reveal about customer behaviour—and what an aggregate growth number can hide.',
    question: 'Is growth creating durable revenue?',
    answer:
      'A revenue bridge, cohort view, and acquisition-cost analysis help explain what is growing, what is being lost, and which assumptions need testing. The starting point is an agreed definition for every metric, not a larger dashboard.',
    situations: [
      'ARR is increasing, but churn or customer concentration makes the quality of growth unclear.',
      'Sales, finance, and product teams report different numbers for the same period.',
      'A GTM plan needs channel priorities, acquisition-cost assumptions, and a testable route to market.',
    ],
    deliverables: [
      'Metric dictionary covering ARR/MRR, churn, gross and net revenue retention, CAC, and payback assumptions.',
      'Revenue bridge separating new, expansion, contraction, and churned recurring revenue.',
      'Customer and revenue cohort analysis, with segment comparisons and observation windows.',
      'GTM and lifecycle experiment backlog with measures, owners, and decision thresholds.',
    ],
    inputs: [
      'Recurring-revenue records and billing definitions.',
      'Customer, contract, and subscription histories with stable identifiers.',
      'Acquisition spend, funnel events, and the decision or planning period.',
    ],
    steps: [
      'Agree on the customer, revenue model, measurement window, and decision.',
      'Reconcile source data and document metric definitions and exclusions.',
      'Build the revenue and retention views; investigate material changes.',
      'Present the growth choices, uncertainty, and experiments worth running next.',
    ],
    faqs: [
      {
        question: 'What is ARR, and when is it useful?',
        answer:
          'Annual recurring revenue is an annualised view of recurring revenue at a defined point in time. For a business with monthly recurring revenue, ARR is often calculated as 12 × MRR. One-off fees and non-recurring sales should be separated; ARR is not the same as recognised revenue or a revenue forecast.',
      },
      {
        question: 'How does this relate to brand and go-to-market strategy?',
        answer:
          'Positioning defines who the offer is for; GTM defines how the team will reach them. Growth analysis checks whether acquisition, activation, and repeat behaviour support those choices.',
      },
    ],
    article: 'a-board-ready-arr-and-kpi-dashboard',
  },
  {
    slug: 'board-reporting-kpi',
    title: 'Board reporting & KPI frameworks',
    seoTitle: 'Board Reporting & KPI Frameworks',
    summary:
      'My working notes on connecting strategy, operating performance, and decisions through clear board reporting and KPI frameworks.',
    audience:
      'The question I keep coming back to is how a report helps someone understand what changed and decide what to do next.',
    question: 'What does the board need to decide?',
    answer:
      'A useful board pack links performance against plan to the decisions that need attention. It states what changed, why it matters, the options available, and the recommendation, with consistent definitions and a clear owner for follow-up.',
    situations: [
      'The board pack is long, but the decision and recommended action are hard to find.',
      'Teams measure activity without showing progress toward organisational objectives.',
      'Budgets, operating metrics, cash assumptions, and impact measures sit in separate reports.',
    ],
    deliverables: [
      'Strategy-to-KPI framework with definitions, owners, sources, cadence, and targets.',
      'Executive dashboard and board-pack structure for financial, customer, operating, and risk measures.',
      'Actual-versus-plan analysis and a concise explanation of material variances.',
      'Decision briefs, scenario comparisons, and an action log for the next review.',
    ],
    inputs: [
      'Strategic priorities and upcoming board or leadership decisions.',
      'Existing board packs, budgets, KPI reports, and data sources.',
      'Reporting audience, meeting cadence, and the owners of each measure.',
    ],
    steps: [
      'Clarify the strategic priorities and decisions for the reporting audience.',
      'Select a small set of decision-relevant KPIs and agree on definitions.',
      'Build the reporting structure and reconcile actuals against the plan.',
      'Prepare the narrative, decisions requested, and follow-up responsibilities.',
    ],
    faqs: [
      {
        question: 'How many KPIs should a board dashboard include?',
        answer:
          'There is no universal number. Select the measures needed to explain performance and support the current decisions. A concise top-level view can link to supporting detail rather than carrying every team metric.',
      },
      {
        question: 'Why do metric definitions matter?',
        answer:
          'A chart is easier to trust when its source, calculation, period, and exclusions are clear. I try to make those choices visible so another person can trace the result and challenge the interpretation.',
      },
    ],
    article: 'a-board-ready-arr-and-kpi-dashboard',
  },
  {
    slug: 'corporate-fundraising-strategy',
    title: 'Corporate & fundraising strategy',
    seoTitle: 'Corporate Structure & Fundraising Strategy',
    summary:
      'Exploring how organisational structure, funding needs, ownership scenarios, and the investor narrative fit together.',
    audience:
      'I’m curious about how a growing organisation connects its responsibilities, resources, and next milestones.',
    question: 'Does the structure support the next stage?',
    answer:
      'Corporate and fundraising planning should connect how decisions are made, who owns delivery, how capital is used, and what the organisation needs to demonstrate next. Analysis makes those choices explicit before implementation.',
    situations: [
      'Responsibilities and approval paths are unclear as the organisation grows.',
      'A fundraising target is disconnected from milestones, hiring plans, or runway assumptions.',
      'The team needs to compare dilution, ownership, and capital requirements under alternative scenarios.',
    ],
    deliverables: [
      'Organisational structure options, role accountability, and decision-rights mapping.',
      'Funding requirement, runway, use-of-funds, and milestone scenarios.',
      'Cap-table and dilution models with clearly stated assumptions.',
      'Pitch-deck narrative, market-sizing review, and investor Q&A preparation.',
    ],
    inputs: [
      'Current organisation chart, responsibilities, and approval practices.',
      'Operating plan, financial assumptions, capital requirements, and ownership records.',
      'Fundraising objectives, proposed milestones, and existing pitch materials.',
    ],
    steps: [
      'Define the growth stage, organisational constraints, and funding objective.',
      'Map roles, responsibilities, decision rights, and the operating plan.',
      'Compare funding and ownership scenarios with transparent assumptions.',
      'Prepare the decision brief and materials for discussion with the relevant advisers and stakeholders.',
    ],
    faqs: [
      {
        question: 'What do you mean by corporate structuring?',
        answer:
          'My interest here is in organisational design, decision rights, ownership modelling, and commercial scenario analysis. Legal entity formation, statutory filings, transaction documents, and tax implementation are handled by the organisation’s qualified legal, tax, and accounting advisers.',
      },
      {
        question: 'How should a pitch narrative relate to a financial model?',
        answer:
          'The story and the assumptions should agree on the customer, revenue model, capital needs, and next milestone. Actual results, forecasts, and hypotheses need clear labels.',
      },
    ],
    article: 'a-pitch-deck-is-a-chain-of-evidence',
  },
  {
    slug: 'investment-impact-assessment',
    title: 'Investment strategy & impact assessment',
    seoTitle: 'Investment Analysis & Impact Assessment',
    summary:
      'Exploring investment research, capital-allocation scenarios, and the evidence behind an impact claim.',
    audience:
      'I’m interested in making the commercial assumptions, intended outcomes, and unanswered questions behind an investment case easier to examine.',
    question: 'What evidence supports the investment case?',
    answer:
      'A useful assessment separates the commercial thesis, financial assumptions, execution risks, and intended impact. It shows which evidence supports the case, what remains uncertain, and what would change the recommendation.',
    situations: [
      'An investment or project proposal needs a consistent assessment framework.',
      'Capital-allocation options need comparison against strategic objectives and constraints.',
      'An impact claim reports activities or reach without explaining the intended outcome or evidence.',
    ],
    deliverables: [
      'Commercial research and an investment thesis with assumptions and evidence gaps.',
      'Capital-allocation and investment-structuring scenarios covering cash needs, milestones, and downside cases.',
      'Investment memo or committee brief with risks, sensitivities, and monitoring priorities.',
      'Impact framework connecting inputs, activities, outputs, outcomes, indicators, and evidence sources.',
    ],
    inputs: [
      'The proposal, intended decision, investment horizon, and organisational objectives.',
      'Market research, operating assumptions, financial information, and relevant benchmarks.',
      'Impact objectives, beneficiary definitions, baseline information, and available evidence.',
    ],
    steps: [
      'Define the mandate, decision criteria, constraints, and intended outcomes.',
      'Assess the commercial case, source quality, assumptions, and major risks.',
      'Compare financial and structuring scenarios; identify sensitivities and evidence gaps.',
      'Prepare the decision memo and an ongoing performance and impact monitoring framework.',
    ],
    faqs: [
      {
        question:
          'How is impact assessment different from performance reporting?',
        answer:
          'Performance reporting tracks what happened against a plan. Impact assessment examines intended changes for people or systems and the evidence supporting those changes. Outputs, outcomes, contribution, and causal attribution should be distinguished.',
      },
      {
        question: 'What makes an investment memo useful?',
        answer:
          'It should make the thesis, evidence, assumptions, downside cases, and unresolved questions easy to examine. The point is to support a decision and a learning process, rather than to make uncertainty disappear.',
      },
    ],
    article: 'investment-and-impact-assessment-framework',
  },
];
export function advisoryBySlug(slug: string): AdvisoryArea | undefined {
  return advisoryAreas.find((area) => area.slug === slug);
}
