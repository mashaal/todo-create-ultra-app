import React from 'react';
import { getSDK } from '../../../lib/graphql.ts';

export function TagListPage() {
  const sdk = getSDK();

  const { error, data } = sdk.useFindAllTags('findAllTags');

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
              <a href={`/tags/${list._id}`}>{list.label}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
