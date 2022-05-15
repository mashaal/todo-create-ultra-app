import React from 'react';
import { Link } from 'wouter';

import { Loader } from '../atoms/Loader.tsx';
import { Spinner } from '../atoms/Spinner.tsx';
import { getSDK } from '../../graphql/client.ts';

export function TodoList() {
  const sdk = getSDK();
  const { data, error } = sdk.useFindAllTodos('findAllTodos');

  if (!data && !error) {
    return (
      <Loader>
        <Spinner />
      </Loader>
    );
  }

  if (error) {
    return <div>{error.stack || error.message}</div>;
  }

  return (
    <>
      <style>
        {`
          ul.TodoList {
            margin-top: var(--size-3);
            margin-bottom: 0;
            padding-left: 0;
            flex: 1;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
      <ul className='TodoList'>
        {data?.findAllTodos?.map((entry) => {
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
