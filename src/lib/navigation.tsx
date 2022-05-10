export type NavigationItem = {
  path: string;
  label: string;
  items?: NavigationItem[];
};

export const pageTree: NavigationItem[] = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/blog',
    label: 'Blog',
  },
  {
    path: '/contact',
    label: 'Contact',
  },
];
