import Link from 'next/link';
import { advisoryAreas } from '@/data/advisory';
export default function AdvisoryLinks() {
  return (
    <div className="service-grid">
      {advisoryAreas.map((area) => (
        <Link
          className="service-card"
          key={area.slug}
          href={`/services/${area.slug}/`}
        >
          <h3>{area.title}</h3>
          <p>{area.summary}</p>
          <span className="service-more">
            Explore the service <span aria-hidden="true">→</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
