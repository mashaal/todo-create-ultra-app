import React from 'react';
import { Link } from 'wouter';

import { getSDK } from '../../../lib/graphql.ts';

export function ProjectListPage() {
  const sdk = getSDK();

  const { error, data } = sdk.useFindAllProjects('findAllProjects');

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
      <h1>Projects</h1>
      <ul>
        {data?.findAllProjects?.data?.map((list) => {
          if (!list) {
            return;
          }

          return (
            <li key={list._id}>
              <Link to={`/projects/${list._id}`}>{list.label}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
