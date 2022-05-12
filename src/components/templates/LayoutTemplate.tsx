import React from 'react';
import { ReactNode } from 'react';

import { Navbar } from '../../components/organisms/Navbar/Navbar.tsx';
import { pageTree } from '../../lib/navigation.tsx';

export type LayoutTemplateProps = {
  children: ReactNode;
};

export function LayoutTemplate({ children }: LayoutTemplateProps) {
  const navbarLinks = pageTree;
  if (!navbarLinks) {
    throw new Error('Navbar links not found');
  }

  return (
    <>
      <style>
        {`
          .LayoutTemplate {
            display: flex;
            flex-direction: column;
            width: 100vw;
            height: 100vh;
          }
          .NavbarContainer {
          }
          .ContentContainer {
            flex: 1;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
      <div className='LayoutTemplate'>
        <div className='NavbarContainer'>
          <Navbar items={navbarLinks} />
        </div>
        <div className='ContentContainer'>
          {children}
        </div>
      </div>
    </>
  );
}
