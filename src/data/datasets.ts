import { shipped } from './projects';
export const datasets = shipped
  .filter((project) => project.slug)
  .map((project) => ({
    slug: project.slug as string,
    title: project.title,
    question: project.question as string,
    source:
      project.slug === 'news-sentiment'
        ? 'News API headlines. TODO: record extraction dates, query filters, coverage and licence.'
        : 'UN Comtrade, HS 85, India exports, 2016–2024. TODO: record extraction date, query and source version.',
    method: project.approach as string,
    findings:
      'TODO: publish findings supported by saved outputs, with units, observation window and limitations. No quantified findings are asserted here.',
    code: project.link,
    dashboard: project.dashboard,
    updated: 'TODO: confirm the last dataset refresh date',
  }));
