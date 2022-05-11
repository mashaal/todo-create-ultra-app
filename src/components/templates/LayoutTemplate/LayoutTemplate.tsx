import React from 'react';
import { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

import { Navbar } from '../../../components/organisms/Navbar/Navbar.tsx';
import { pageTree } from '../../../lib/navigation.tsx';

export type LayoutTemplateProps = {
  children: ReactNode;
};

export function LayoutTemplate({ children }: LayoutTemplateProps) {
  const navbarLinks = pageTree;
  if (!navbarLinks) {
    throw new Error('Navbar links not found');
  }

  return (
    <div className='LayoutTemplate'>
      <Helmet>
        <link
          rel='stylesheet'
          href='/components/templates/LayoutTemplate/LayoutTemplate.css'
        />
      </Helmet>
      <div className='NavbarContainer'>
        <Navbar items={navbarLinks} />
      </div>
      <div className='ContentContainer'>
        {children}
      </div>
    </div>
  );
}
