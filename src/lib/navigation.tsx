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
    path: '/lists',
    label: 'Lists',
  },
  {
    path: '/projects',
    label: 'Projects',
  },
  {
    path: '/tags',
    label: 'Tag',
  },
];
