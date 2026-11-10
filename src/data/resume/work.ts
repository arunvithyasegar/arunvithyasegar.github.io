/** Based on the JSON Resume work item, with a local `commitment` extension. */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
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
    name: 'Agathium',
    position: 'Business Data Analyst (Contractual)',
    url: 'https://agathium.com',
    startDate: '2025-01-01',
    highlights: [
      'Redesigned enterprise-level business processes using ARIS,\n                    achieving a 25% improvement in operational efficiency.',
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
      'Streamlined cross-functional agri-supply workflows using\n                    BPMN, reducing process bottlenecks by 20% and improving\n                    trade readiness.',
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
      'Optimized SQL queries and managed PostgreSQL databases,\n                    improving data pipeline efficiency by 25%.',
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
