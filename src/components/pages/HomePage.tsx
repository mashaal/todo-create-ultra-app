import React from 'react';
import * as TodoList from '../cells/TodoList.tsx';
import { Cell } from '../atoms/Cell.tsx';
import { NewTodoInput } from '../atoms/NewTodoInput.tsx';
import { getSDK } from '../../graphql/client.ts';
import { parseTodo } from '../../lib/todo.ts';

export function HomePage() {
  async function handleSubmit(value: string) {
    const sdk = getSDK();
    const data = parseTodo(value);
    const result = await sdk.createHomeTodo({ data });

    // TODO: Update queries on this page.
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
        `}
      </style>
      <div className='InputContainer'>
        <NewTodoInput
          onSubmit={handleSubmit}
        />
        <Cell component={TodoList} />
      </div>
    </>
  );
}
