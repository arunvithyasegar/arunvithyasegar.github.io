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
  { label: 'About', path: '/about' },
  { label: 'Expertise', path: '/services' },
  { label: 'Writing', path: '/writing' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contact', path: '/contact' },
  { label: 'Case studies', path: '/case-studies', primary: false },
  { label: 'For employers', path: '/hire', primary: false },
  { label: 'Speaking', path: '/speaking', primary: false },
  { label: 'Startup ecosystem', path: '/startup-ecosystem', primary: false },
  { label: 'Stats', path: '/stats', primary: false },
];
export default routes;
