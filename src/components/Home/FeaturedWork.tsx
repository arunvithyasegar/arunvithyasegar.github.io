import Link from 'next/link';
import { shipped } from '@/data/projects';
import ProjectPreview from './ProjectPreview';

const titles = [
  'Can news sentiment reveal changing market narratives?',
  'What do India’s electrical-machinery exports reveal about concentration and volatility?',
];
const meanings = [
  'Make patterns in coverage easier to question—not a substitute for interpreting the source.',
  'Look beyond an export total to understand how trade patterns differ across markets.',
];
export default function FeaturedWork() {
  return (
    <section className="p-section" aria-labelledby="home-work">
      <div className="p-section-head">
        <div>
          <p className="p-section-num">01 / Work</p>
          <h2 id="home-work">Selected work</h2>
        </div>
        <p>
          Real questions. Open methods.
          <br />
          Something you can explore.{' '}
          <Link href="/projects/">All projects →</Link>
        </p>
      </div>
      <div className="p-projects">
        {shipped.slice(0, 2).map((project, index) => (
          <article key={project.title} className="p-project">
            <ProjectPreview trade={index === 1} />
            <div className="p-project-body">
              <span className="p-tag">
                Public project ·{' '}
                {index === 0 ? 'Language & perception' : 'Markets & trade'}
              </span>
              <h3>{titles[index]}</h3>
              <p>{project.approach}</p>
              <p className="p-why">Why it matters: {meanings[index]}</p>
              <ul className="p-tools" aria-label="Tools used">
                {project.tech?.slice(0, 3).map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
              <div className="p-project-actions">
                <a
                  href={project.dashboard}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} dashboard (opens in a new tab)`}
                >
                  Open dashboard <span aria-hidden="true">→</span>
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} code (opens in a new tab)`}
                >
                  View code <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
