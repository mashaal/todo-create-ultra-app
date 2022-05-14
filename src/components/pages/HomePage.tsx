import React from 'react';
import { Link } from 'wouter';

import { Loader } from '../atoms/Loader.tsx';
import { NewTodoInput } from '../atoms/NewTodoInput.tsx';
import { Spinner } from '../atoms/Spinner.tsx';
import { TodoInput } from '../../graphql/faunadb/generated/client.ts';
import { getSDK } from '../../lib/graphql.ts';
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
    const { label, listLabel, projectLabel, tags } = parseTodo(value);

    const data: TodoInput = {
      label,
    };

    if (listLabel) {
      const existingList = (await sdk.findListByLabel({
        label: listLabel,
      })).findListByLabel;

      if (existingList) {
        data.list = {
          connect: existingList._id,
        };
      } else {
        data.list = {
          create: {
            label: listLabel,
          },
        };
      }
    }

    if (projectLabel) {
      const existingProject = (await sdk.findProjectByLabel({
        label: projectLabel,
      })).findProjectByLabel;

      if (existingProject) {
        data.project = {
          connect: existingProject._id,
        };
      } else {
        data.project = {
          create: {
            label: projectLabel,
          },
        };
      }
    }

    if (tags) {
      data.tags = {};

      await Promise.all(tags.map(async (tag) => {
        const existingTag =
          (await sdk.findTagByLabel({ label: tag })).findTagByLabel;

        if (existingTag) {
          data.tags = data.tags || {};
          data.tags.connect = data.tags?.connect || [];
          data.tags.connect.push(existingTag._id);
        } else {
          data.tags = data.tags || {};
          data.tags.create = data.tags?.create || [];
          data.tags.create.push({ label: tag });
        }
      }));
    }

    const result = await sdk.createTodo({ data });

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
          {data?.findAllTodos?.data.map((todo) => {
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
