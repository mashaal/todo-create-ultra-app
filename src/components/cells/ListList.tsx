import React from 'react';
import { Link } from 'wouter';

import { Loader } from '../atoms/Loader.tsx';
import { Spinner } from '../atoms/Spinner.tsx';
import { useFindAllListsQuery } from '../../graphql/generated/client.ts';
import { endpoint } from '../../graphql/client.ts';

export function ListList() {
  const findAllLists = useFindAllListsQuery({ endpoint });

  if (findAllLists.isLoading) {
    return (
      <Loader>
        <Spinner />
      </Loader>
    );
  }

  if (findAllLists.error) {
    return <div>There was an error rendering this component.</div>;
  }

  return (
    <>
      <style>
        {`
          ul.ListList {
            margin-top: var(--size-3);
            margin-bottom: 0;
            padding-left: 0;
            flex: 1;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
      <ul className='ListList'>
        {findAllLists.data?.findAllLists.map((entry) => {
          return (
            <li>
              <Link to='/todos'>{entry?.label}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
