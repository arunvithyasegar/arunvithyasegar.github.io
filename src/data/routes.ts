import { AUTHOR_NAME } from '@/lib/utils';

export interface Route {
  label: string;
  path: string;
  index?: boolean;
  primary?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: AUTHOR_NAME,
    path: '/',
  },
  { label: 'Services', path: '/services' },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Resume',
    path: '/resume',
    primary: false,
  },
  // Stays in the nav: `/contact` hides the footer, so from there a non-primary
  // route would be unreachable.
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'Writing',
    path: '/writing',
  },
  {
    label: 'Speaking',
    path: '/speaking',
    primary: false,
  },
  {
    label: 'Stats',
    path: '/stats',
    primary: false,
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export default routes;
