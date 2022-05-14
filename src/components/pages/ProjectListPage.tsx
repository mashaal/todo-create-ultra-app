import React from 'react';
import { Link } from 'wouter';

import { getSDK } from '../../graphql/app/client.ts';
import { Loader } from '../atoms/Loader.tsx';
import { Spinner } from '../atoms/Spinner.tsx';

export function ProjectListPage() {
  const sdk = getSDK();

  const { error, data } = sdk.useFindAllProjects('findAllProjects');

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
      <h1>Projects</h1>
      <ul>
        {data?.findAllProjects?.map((list) => {
          if (!list) {
            return;
          }

          return (
            <li key={list.id}>
              <Link to={`/projects/${list.id}`}>{list.label}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
