import React from 'react';
import { client } from '../../../lib/graphql.ts';
import { getSdkWithHooks } from '../../../graphql/generated/client.ts';

export type ListShowPageProps = {
  id: string;
};

export function ListShowPage({ id }: ListShowPageProps) {
  const sdk = getSdkWithHooks(client);

  const { error, data } = sdk.useFindListById('findListById', { id });

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

  const label = data?.findListByID?.label;

  return (
    <>
      <h1>{label}</h1>
    </>
  );
}
