import React from 'react';
import { Link } from 'wouter';

import { getSDK } from '../../graphql/app/client.ts';
import { Loader } from '../atoms/Loader.tsx';
import { Spinner } from '../atoms/Spinner.tsx';

export function ListListPage() {
  const sdk = getSDK();

  const { error, data } = sdk.useFindAllLists('findAllLists');

  if (!error && !data) {
    return (
      <Loader>
        <Spinner />
      </Loader>
    );
  }

  if (error) {
    return (
      <>
        <h1>Error</h1>
      </>
    );
  }

  return (
    <>
      <h1>Lists</h1>
      <ul>
        {data?.findAllLists?.map((list) => {
          if (!list) {
            return;
          }

          return (
            <li key={list.id}>
              <Link to={`/lists/${list.id}`}>{list.label}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
