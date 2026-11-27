/** Based on the JSON Resume work item, with a local `commitment` extension. */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  /** The source establishes a start, but not whether this role is still active. */
  currentStatusUnknown?: boolean;
  /**
   * Marks an open-ended role that ran alongside the primary career. Omitted
   * means full-time; `sortPositions` uses this to keep an enduring side role
   * from outranking every later full-time position.
   */
  commitment?: 'part-time';
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'AIC–Anna University Incubation Foundation',
    position: 'Senior Associate – Incubation',
    url: 'https://annaincubator.org/',
    startDate: '2026-10-05',
    summary:
      'Incubation operations and startup analytics: startup evaluation, application pipelines, committee coordination, impact reporting and digital process design. Selected responsibilities and deliverables from October–November 2026.',
    highlights: [
      'Improved startup enquiry and application management through structured Excel trackers covering founder profiles, venture stages, evaluation records, pitch decks, ownership and follow-up actions.',
      'Developed monthly operational dashboards and application deadline calculations to support pipeline reporting and 30-day SLA monitoring.',
      'Supported startup screening through pitch-deck reviews, venture summaries and assessor-style evaluation notes documenting product readiness, founder requirements and next steps.',
      'Supported preparation for the 11th Incubation Committee Meeting, including pipeline consolidation, presentation scheduling, SharePoint deck organisation and review documentation.',
      'Prepared the ETM 2026 impact report, consolidating startup feedback, industry interactions, potential pilot opportunities and follow-up developments; distinguished potential opportunities from confirmed outcomes.',
      'Structured NIRF startup data collection across incorporation, financials, funding, employment and FDI, including supporting-document requirements and conditional form routing.',
      'Developed a Python/Colab-based MCA startup intelligence workflow for company segmentation, lead prioritisation and CRM-ready outputs, with records organised across 309 sector folders. Contact enrichment and outreach remained in development.',
      'Consolidated industry-event contacts from photographs and business cards into structured lead records for incubation follow-up.',
      'Designed a phased data architecture roadmap covering persistent identifiers, database relationships, validation, SLA tracking, audit trails, access controls and migration from Excel; database and portal deployment were not claimed.',
      'Supported founder onboarding and portfolio development through incubation-term documentation, institutional resource mapping and research into seed funding and startup support programmes.',
      'Assessed server, VM access, automation and Microsoft 365 archival requirements to support infrastructure planning and operational continuity.',
    ],
  },
  {
    name: 'Agathium',
    currentStatusUnknown: true,
    position: 'Business Data Analyst (Contractual)',
    url: 'https://agathium.com',
    startDate: '2025-01-01',
    highlights: [
      'Redesigned enterprise-level business processes using ARIS,\n                    to improve operational visibility.',
      'Developed investment facilitation models and policy\n                    documentation for a unified insurance ecosystem aligned with\n                    government initiatives.',
      'Analyzed foreign investment trends, FDI inflows, and\n                    employment data; prepared strategic briefs for global\n                    delegation engagements and investment positioning.',
      'Built interactive Power BI dashboards integrated with SQL to\n                    visualize economic indicators and monitor sectoral growth\n                    across regions.',
      'Implemented governance frameworks and standardized\n                    documentation practices, ensuring regulatory compliance and\n                    operational transparency.',
      'Led Agile-based project delivery, bridging business and\n                    technical teams to align with business transformation goals.',
      'Optimized workflows across enterprise and utilities asset\n                    management systems, integrating performance monitoring tools\n                    to enhance system efficiency.',
    ],
  },
  {
    name: 'payAgri',
    position: 'Business Analyst',
    url: 'https://payagri.com',
    startDate: '2024-03-01',
    highlights: [
      'Streamlined cross-functional agri-supply workflows using\n                    BPMN, identifying process bottlenecks and improving\n                    trade readiness.',
      'Spearheaded market-readiness interventions aligned with Ease\n                    of Doing Business reforms, increasing rural agri-enterprise\n                    participation.',
      'Conducted risk assessments and implemented data quality\n                    governance frameworks, ensuring compliance with export\n                    regulations.',
      'Drafted policy briefs and developed ROI-focused business\n                    cases for government-supported initiatives and grant funding\n                    proposals.',
      'Built real-time Power BI dashboards and Python-based\n                    reporting tools for KPI monitoring, enhancing operational\n                    visibility across the value chain.',
      'Consolidated large datasets using SQL and Python (Pandas,\n                    NumPy) to generate trade-related insights supporting export\n                    promotion.',
      'Collaborated with export-focused stakeholders and foreign\n                    partners to showcase Tamil Nadu’s agri-export strengths.',
    ],
    endDate: '2024-12-31',
  },
  {
    name: 'Rubus Digitals',
    position: 'Data Analyst Intern',
    url: 'https://rubusdigitals.com',
    startDate: '2024-01-01',
    highlights: [
      'Conducted exploratory data analysis (EDA) and financial\n                    modeling to inform pricing and market strategies for B2B\n                    partners in digital commerce.',
      'Optimized SQL queries and managed PostgreSQL databases,\n                    supporting more efficient data pipelines.',
      'Integrated MQTT-based real-time data streaming for supply\n                    chain monitoring and event-driven analytics.',
      'Designed Power BI dashboards to visualize product metrics,\n                    enabling real-time tracking and strategic forecasting.',
    ],
    endDate: '2024-03-31',
  },
  {
    name: 'StartupTN',
    position: 'Business Analyst Intern',
    url: 'https://startuptn.in',
    startDate: '2022-12-01',
    highlights: [
      'Contributed to Tamil Nadu’s recognition as a “Best\n                    Performer” in the Startup India Ranking 2022 by designing\n                    data-driven policy briefs.',
      'Built interactive dashboards and analytics tools using SQL\n                    and Power BI to monitor state-wide startup performance and\n                    funding distribution.',
      'Conducted secondary research and authored whitepapers on\n                    startup investment policy frameworks and innovation\n                    clusters.',
      'Facilitated investor onboarding and collaborated with\n                    multilateral institutions, enhancing Tamil Nadu’s profile in\n                    international startup investment networks.',
      'Streamlined processes and led user acceptance testing (UAT),\n                    ensuring stakeholder alignment and implementation readiness.',
    ],
    endDate: '2023-05-31',
  },
];
export default work;
