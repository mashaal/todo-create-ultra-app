import React from 'react';
import { Link } from 'wouter';

import { getSDK } from '../../lib/graphql.ts';
import { Loader } from '../atoms/Loader.tsx';
import { Spinner } from '../atoms/Spinner.tsx';

export function TagListPage() {
  const sdk = getSDK();

  const { error, data } = sdk.useFindAllTags('findAllTags');

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

  const tags = data?.findAllTags?.data;

  if (!tags) {
    throw new Error('No tags found');
  }

  tags.sort((a, b) => {
    if (!a || !b) {
      return 0;
    }

    if (a.label < b?.label) {
      return -1;
    }

    if (a.label > b.label) {
      return 1;
    }

    return 0;
  });

  return (
    <>
      <h1>Tags</h1>
      <ul>
        {tags.map((list) => {
          if (!list) {
            return;
          }

          return (
            <li key={list._id}>
              <Link to={`/tags/${list._id}`}>{list.label}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
