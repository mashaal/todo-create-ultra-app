import React from 'react';
import { Link } from 'wouter';

import { Loader } from '../atoms/Loader.tsx';
import { NewTodoInput } from '../atoms/NewTodoInput.tsx';
import { Spinner } from '../atoms/Spinner.tsx';
import { getSDK } from '../../graphql/app/client.ts';
import { parseTodo } from '../../lib/todo.ts';

export function HomePage() {
  const sdk = getSDK();

  const { data, error } = sdk.useFindAllTodos('findAllTodos');

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

  async function handleSubmit(value: string) {
    const data = parseTodo(value);
    const result = await sdk.createHomeTodo({ data });
    console.log('result', result);
  }

  return (
    <>
      <style>
        {`
          .InputContainer {
            display: flex;
            flex-direction: column;
            padding-left: var(--size-12);
            padding-right: var(--size-12);
          }

          ul.TodoList {
            margin-top: var(--size-3);
            margin-bottom: 0;
            padding-left: 0;
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          ul.TodoList li {
          }
        `}
      </style>
      <div className='InputContainer'>
        <NewTodoInput
          onSubmit={handleSubmit}
        />
        <ul className='TodoList'>
          {data?.findAllTodos?.map((todo) => {
            return (
              <li>
                <Link to='/todos'>{todo?.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
