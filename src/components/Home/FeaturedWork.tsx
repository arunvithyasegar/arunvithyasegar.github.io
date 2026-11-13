import Link from 'next/link';
import { shipped } from '@/data/projects';

export default function FeaturedWork() {
  return (
    <section className="consulting-section" aria-labelledby="home-work">
      <div className="portfolio-section-heading">
        <div>
          <p className="eyebrow">Ideas, made tangible</p>
          <h2 id="home-work" className="section-heading">
            Selected work
          </h2>
        </div>
        <Link href="/projects/">All projects →</Link>
      </div>
      <p className="page-prose">
        Two public projects you can open, explore, and look under the hood.
      </p>
      <div className="featured-work-grid">
        {shipped.slice(0, 2).map((project, index) => (
          <article key={project.title} className="featured-work-card">
            <div className="featured-work-label">
              <span>0{index + 1} / Public project</span>
              <span>
                {index === 0 ? 'Language & perception' : 'Markets & trade'}
              </span>
            </div>
            <h3>{project.title}</h3>
            <dl className="project-evidence">
              <div>
                <dt>The question</dt>
                <dd>{project.question}</dd>
              </div>
              <div>
                <dt>The approach</dt>
                <dd>{project.approach}</dd>
              </div>
            </dl>
            <ul className="project-tool-list" aria-label="Tools used">
              {project.tech?.slice(0, 3).map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
            <div className="project-actions">
              <a
                href={project.dashboard}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} dashboard (opens in a new tab)`}
              >
                Explore dashboard <span aria-hidden="true">↗</span>
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} code (opens in a new tab)`}
              >
                View code <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
