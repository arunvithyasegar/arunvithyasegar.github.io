import profile from '@/data/profile.json';
import projects from '@/data/projects';
import certifications from '@/data/resume/certifications';
import work from '@/data/resume/work';
import Table from './Table';
export default function PersonalStats() {
  return (
    <Table
      data={[
        {
          label: 'Current role',
          value: `${profile.role} at ${profile.employer}`,
        },
        { label: 'Joined Anna Incubator', value: '5 October 2026' },
        { label: 'Portfolio projects', value: String(projects.length) },
        { label: 'Experience entries', value: String(work.length) },
        { label: 'Certifications', value: String(certifications.length) },
      ]}
    />
  );
}
