import React from 'react';
import { client } from '../../../lib/graphql.ts';
import { getSdkWithHooks } from '../../../graphql/generated/client.ts';

export function HomePage() {
  const sdk = getSdkWithHooks(client);

  const { error, data } = sdk.useFindAllLists('findAllLists');

  console.log('error', error);
  console.log('data', data);

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
        {data?.findAllLists.data?.map((list) => (
          <li key={list?.label}>{list?.label}</li>
        ))}
      </ul>
    </>
  );
}
