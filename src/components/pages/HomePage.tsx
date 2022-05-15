import React from 'react';
import { useQueryClient } from 'react-query';

import { NewTodoInput } from '../atoms/NewTodoInput.tsx';
import { TodoList } from '../cells/TodoList.tsx';
import { endpoint } from '../../graphql/client.ts';
import { parseTodo } from '../../lib/todo.ts';
import { useCreateHomeTodoMutation } from '../../graphql/generated/client.ts';

export function HomePage() {
  const queryClient = useQueryClient();
  const createHomeTodo = useCreateHomeTodoMutation({ endpoint }, {
    onSuccess: () => {
      queryClient.refetchQueries('findAllTodos');
      queryClient.invalidateQueries('findAllLists');
      queryClient.invalidateQueries('findAllProjects');
      queryClient.invalidateQueries('findAllTags');
    },
  });

  async function handleSubmit(value: string) {
    const data = parseTodo(value);

    await createHomeTodo.mutateAsync({ data });
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
        <TodoList />
      </div>
    </>
  );
}
