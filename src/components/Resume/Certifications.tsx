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
            <a href={item.url}>
              <span className="course-name">{item.title} ↗</span>
            </a>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
