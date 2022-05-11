import React from 'react';

import { getSDK } from '../../../lib/graphql.ts';

export type ListShowPageProps = {
  id: string;
};

export function ListShowPage({ id }: ListShowPageProps) {
  const sdk = getSDK();

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
