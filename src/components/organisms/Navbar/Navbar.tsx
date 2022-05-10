import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'wouter';

import { NavigationItem } from '../../../lib/navigation.tsx';

export type NavbarProps = {
  items: NavigationItem[];
};

export function Navbar({ items }: NavbarProps) {
  return (
    <div className='Navbar'>
      <Helmet>
        <link
          rel='stylesheet'
          href='/components/organisms/Navbar/Navbar.css'
        />
      </Helmet>
      {items.map((item, i) => {
        return (
          <div className='Item' key={`${i}-${item.path}`}>
            <Link to={item.path}>{item.label}</Link>
          </div>
        );
      })}
    </div>
  );
}
