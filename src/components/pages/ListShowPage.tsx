import React from 'react';
import { ListShow } from '../cells/ListShow.tsx';

export type ListShowPageProps = {
  id: string;
};

export function ListShowPage({ id }: ListShowPageProps) {
  return (
    <>
      <ListShow id={id} />
    </>
  );
}
