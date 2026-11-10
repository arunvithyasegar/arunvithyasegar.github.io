import profile from '@/data/profile.json';
import work from '@/data/resume/work';
import Table from './Table';
export default function PersonalStats() {
  return (
    <Table
      data={[
        { label: 'Current city', value: profile.currentCity },
        { label: 'Experience roles', value: String(work.length) },
      ]}
    />
  );
}
