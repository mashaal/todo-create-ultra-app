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
    path: '/list',
    label: 'Lists',
  },
  {
    path: '/project',
    label: 'Projects',
  },
  {
    path: '/tags',
    label: 'Tag',
  },
];
