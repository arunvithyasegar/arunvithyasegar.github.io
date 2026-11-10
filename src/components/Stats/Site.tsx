import projects from '@/data/projects';
import certifications from '@/data/resume/certifications';
import { SOURCE_REPOSITORY } from '@/lib/telemetry';
import Table from './Table';
export default function SiteStats() {
  return (
    <Table
      data={[
        {
          label: 'Selected projects',
          value: String(projects.length),
          link: '/projects/',
        },
        {
          label: 'Certifications',
          value: String(certifications.length),
          link: '/resume/#certifications',
        },
        {
          label: 'Source repository',
          value: 'GitHub',
          link: `https://github.com/${SOURCE_REPOSITORY}`,
        },
      ]}
    />
  );
}
