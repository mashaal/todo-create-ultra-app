import React from 'react';
import { Link } from 'wouter';

import { Loader } from '../atoms/Loader.tsx';
import { Spinner } from '../atoms/Spinner.tsx';
import { useFindAllProjectsQuery } from '../../graphql/generated/client.ts';
import { endpoint } from '../../graphql/client.ts';

export function ProjectList() {
  const findAllProjects = useFindAllProjectsQuery({ endpoint });

  if (findAllProjects.isLoading) {
    return (
      <Loader>
        <Spinner />
      </Loader>
    );
  }

  if (findAllProjects.error) {
    return <div>There was an error rendering this component.</div>;
  }

  return (
    <>
      <style>
        {`
          ul.ProjectList {
            margin-top: var(--size-3);
            margin-bottom: 0;
            padding-left: 0;
            flex: 1;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
      <ul className='ProjectList'>
        {findAllProjects.data?.findAllProjects.map((entry) => {
          return (
            <li>
              <Link to='/todos'>{entry?.label}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
