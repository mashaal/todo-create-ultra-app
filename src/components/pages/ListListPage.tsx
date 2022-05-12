import React from 'react';
import { Link } from 'wouter';

import { getSDK } from '../../lib/graphql.ts';
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
        {data?.findAllLists?.data?.map((list) => {
          if (!list) {
            return;
          }

          return (
            <li key={list._id}>
              <Link to={`/lists/${list._id}`}>{list.label}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
