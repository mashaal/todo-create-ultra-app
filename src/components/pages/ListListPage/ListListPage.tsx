import React from 'react';
import { getSDK } from '../../../lib/graphql.ts';

export function ListListPage() {
  const sdk = getSDK();

  const { error, data } = sdk.useFindAllLists('findAllLists');

  if (!error && !data) {
    return (
      <>
        <h1>Loading</h1>
      </>
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
              <a href={`/lists/${list._id}`}>{list.label}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
