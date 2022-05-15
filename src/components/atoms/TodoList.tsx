import React from 'react';
import { Link } from 'wouter';

import { Loader } from './Loader.tsx';
import { Spinner } from './Spinner.tsx';
import { getSDK } from '../../graphql/client.ts';

export const request = () => {
  const sdk = getSDK();
  const { data, error } = sdk.useFindAllTodos('findAllTodos');
  return { data, error };
};

export const loading = () => {
  return (
    <Loader>
      <Spinner />
    </Loader>
  );
};

export const failure = ({ error }: { error: Error }) => {
  return <div>{error.stack || error.message}</div>;
};

export const success = (
  { data }: { data: ReturnType<typeof request>['data'] },
) => {
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
};
