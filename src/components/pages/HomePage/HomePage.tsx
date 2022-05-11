import React from 'react';
import { client } from '../../../lib/graphql.ts';
import {
  getSdkWithHooks,
  TodoInput,
} from '../../../graphql/generated/client.ts';
import { NewTodoInput } from '../../atoms/NewTodoInput/NewTodoInput.tsx';
import { parseTodo } from '../../../lib/todo.ts';

export function HomePage() {
  const sdk = getSdkWithHooks(client);

  const { data, error } = sdk.useFindAllTodos('todos');

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
            const existingList = await sdk.findListByLabel(listLabel);
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
            const existingProject = await sdk.findProjectByLabel(listLabel);
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
            const existingTags = await sdk.findTagsByLabels(tags);
            data.tags = {};
            if (existingTags.length > 0) {
              data.tags.connect = existingTags.map((tag) => tag._id);
            }
            const newTags = tags.filter((tag) =>
              !existingTags.map((tag) => tag.label).includes(tag)
            );
            if (newTags.length > 0) {
              data.tags.create = newTags.map((tag) => ({ label: tag }));
            }
          }

          const result = await sdk.createTodo({ data });
        }}
      />
      <ul>
        <li>
          <a href='/lists'>Lists</a>
        </li>
      </ul>
    </>
  );
}
