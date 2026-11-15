import { AUTHOR_NAME } from '@/lib/utils';

export interface Route {
  label: string;
  path: string;
  index?: boolean;
  primary?: boolean;
}

const routes: Route[] = [
  { index: true, label: AUTHOR_NAME, path: '/' },
  { label: 'Work', path: '/projects' },
  { label: 'Case studies', path: '/case-studies' },
  { label: 'Writing', path: '/writing' },
  { label: 'Services', path: '/services' },
  { label: 'Hire', path: '/hire' },
  { label: 'About', path: '/about', primary: false },
  { label: 'Resume', path: '/resume', primary: false },
  { label: 'Speaking', path: '/speaking', primary: false },
  { label: 'Startup ecosystem', path: '/startup-ecosystem', primary: false },
  { label: 'Stats', path: '/stats', primary: false },
  { label: 'Contact', path: '/contact' },
];
export default routes;
