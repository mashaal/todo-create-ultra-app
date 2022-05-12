import React from 'react';

export function Loader({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>
        {`
          .Loader {
            flex: 1;
            display: flex;
            height: 100%;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
      <div className='Loader'>{children}</div>
    </>
  );
}
