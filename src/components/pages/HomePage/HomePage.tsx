import React from 'react';
import { client } from '../../../lib/graphql.ts';
import { getSdkWithHooks } from '../../../graphql/generated/client.ts';

export function HomePage() {
  const sdk = getSdkWithHooks(client);

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
      <h1>Home</h1>
      <ul>
        <li>
          <a href='/list'>Lists</a>
        </li>
      </ul>
    </>
  );
}
