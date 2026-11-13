import { AUTHOR_NAME } from '@/lib/utils';

export interface Route {
  label: string;
  path: string;
  index?: boolean;
  primary?: boolean;
}

const routes: Route[] = [
  { index: true, label: AUTHOR_NAME, path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Writing', path: '/writing' },
  { label: 'About', path: '/about' },
  { label: 'Focus', path: '/services' },
  { label: 'Resume', path: '/resume', primary: false },
  { label: 'Speaking', path: '/speaking', primary: false },
  { label: 'Stats', path: '/stats', primary: false },
  { label: 'Contact', path: '/contact' },
];
export default routes;
