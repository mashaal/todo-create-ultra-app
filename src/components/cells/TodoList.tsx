import React from 'react';
import { Link } from 'wouter';

import { Loader } from '../atoms/Loader.tsx';
import { Spinner } from '../atoms/Spinner.tsx';
import { useFindAllTodosQuery } from '../../graphql/generated/client.ts';
import { endpoint } from '../../graphql/client.ts';

export function TodoList() {
  const findAllTodos = useFindAllTodosQuery({ endpoint });

  if (findAllTodos.isLoading) {
    return (
      <Loader>
        <Spinner />
      </Loader>
    );
  }

  if (findAllTodos.error) {
    return <div>There was an error rendering this component.</div>;
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
        {findAllTodos.data?.findAllTodos.map((entry) => {
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
