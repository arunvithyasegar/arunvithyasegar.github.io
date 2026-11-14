import Link from 'next/link';
import profile from '@/data/profile.json';
import certifications from '@/data/resume/certifications';
import work from '@/data/resume/work';
import { currentPosition } from '@/lib/career';
import { formatDate } from '@/lib/utils';

export default function PersonalStats() {
  const role = currentPosition(work);
  return (
    <div className="stats-chapter">
      <p className="stats-source-label">Profile information</p>
      <h2 id="stats-about-me">Current chapter</h2>
      <dl>
        <div>
          <dt>Role</dt>
          <dd>{role?.position ?? profile.role}</dd>
        </div>
        <div>
          <dt>Organisation</dt>
          <dd>{role?.name ?? profile.employer}</dd>
        </div>
        {role && (
          <div>
            <dt>Since</dt>
            <dd>
              <time dateTime={role.startDate}>
                {formatDate(role.startDate)}
              </time>
            </dd>
          </div>
        )}
        <div>
          <dt>Based in</dt>
          <dd>{profile.currentCity}</dd>
        </div>
        <div>
          <dt>Learning</dt>
          <dd>
            <Link href="/resume/">
              {certifications.length} certifications listed with my experience →
            </Link>
          </dd>
        </div>
      </dl>
      <Link className="stats-text-link" href="/resume/">
        Explore my experience →
      </Link>
    </div>
  );
}
