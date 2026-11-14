import Link from 'next/link';
import projects from '@/data/projects';
import { getWritingItems } from '@/lib/writing';

export default function WorkStats() {
  const metrics = [
    {
      label: 'Portfolio projects',
      value: projects.length,
      detail: 'Explore the questions, methods, and outputs.',
      href: '/projects/',
    },
    {
      label: 'Public dashboards',
      value: projects.filter((project) => project.dashboard).length,
      detail: 'Open the interactive work for yourself.',
      href: '/projects/',
    },
    {
      label: 'Published writing',
      value: getWritingItems().length,
      detail: 'Read the notes and practical frameworks.',
      href: '/writing/',
    },
  ];
  return (
    <section className="stats-section" aria-labelledby="stats-work">
      <div className="stats-section-intro">
        <div>
          <p className="stats-source-label">Updated on deployment</p>
          <h2 id="stats-work">Work you can explore</h2>
        </div>
        <p>Each number leads to the work behind it.</p>
      </div>
      <div className="stats-metric-grid">
        {metrics.map((metric) => (
          <Link className="stats-metric" key={metric.label} href={metric.href}>
            <span className="stats-metric-number">{metric.value}</span>
            <span className="stats-metric-label">{metric.label}</span>
            <span className="stats-metric-detail">{metric.detail}</span>
            <span className="stats-metric-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
