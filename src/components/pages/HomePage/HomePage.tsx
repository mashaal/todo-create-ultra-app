import React from 'react';
import { Link } from 'wouter';

import { NewTodoInput } from '../../atoms/NewTodoInput/NewTodoInput.tsx';
import { TodoInput } from '../../../graphql/generated/client.ts';
import { getSDK } from '../../../lib/graphql.ts';
import { parseTodo } from '../../../lib/todo.ts';

export function HomePage() {
  const sdk = getSDK();

  const { data, error } = sdk.useFindAllTodos('findAllTodos');

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
      <h1>Home</h1>
      <NewTodoInput
        onSubmit={async (value) => {
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
        }}
      />
      <ul>
        {data?.findAllTodos?.data.map((todo) => {
          return (
            <li>
              <Link to='/todos'>{todo?.label}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
