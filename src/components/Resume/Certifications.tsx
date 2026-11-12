import type { Certification } from '@/data/resume/certifications';
export default function Certifications({ data }: { data: Certification[] }) {
  return (
    <div className="courses">
      <div className="section-header">
        <h2 className="section-heading">Certifications</h2>
      </div>
      <ul className="course-list">
        {data.map((item) => (
          <li className="course-container" key={item.url}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <span className="course-name">
                {item.title} <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </span>
            </a>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
