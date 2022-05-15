import React from 'react';

import { Loader } from '../atoms/Loader.tsx';
import { Spinner } from '../atoms/Spinner.tsx';
import { useFindListByIdQuery } from '../../graphql/generated/client.ts';
import { endpoint } from '../../graphql/client.ts';

export type ListShowProps = {
  id: string;
};

export function ListShow({ id }: ListShowProps) {
  const findListById = useFindListByIdQuery({ endpoint }, { id });

  if (findListById.isLoading) {
    return (
      <Loader>
        <Spinner />
      </Loader>
    );
  }

  if (findListById.error) {
    return <div>There was an error rendering this component.</div>;
  }

  const list = findListById.data?.findListById;

  if (!list) {
    <>The list you tried to view wasn't found.</>;
  }

  return (
    <>
      <style>
        {`
          ul.ListShow {
            margin-top: var(--size-3);
            margin-bottom: 0;
            padding-left: 0;
            flex: 1;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
      <ul className='ListShow'>
        {JSON.stringify(list)}
      </ul>
    </>
  );
}
