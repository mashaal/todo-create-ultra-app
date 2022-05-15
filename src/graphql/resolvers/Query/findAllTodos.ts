import { Context } from '../../server.ts';
import { Priority, QueryResolvers, Todo } from '../../generated/server.ts';
import { db } from '../../../db/client.ts';

export const findAllTodos: QueryResolvers<Context>['findAllTodos'] = async (
  _parent,
  _args,
  _ctx,
  _info,
) => {
  try {
    const allTodos = await db.selectFrom('todo')
      .selectAll()
      // .innerJoin('list', 'listId', 'list.id')
      // .innerJoin('project', 'projectId', 'project.id')
      .execute();

    const output: Array<Todo> = [];
    for (const todo of allTodos) {
      const item: Todo = {
        completed: Boolean(todo.completed),
        createdAt: todo.createdAt,
        description: todo.description,
        dueDate: todo.dueDate,
        endDate: todo.endDate,
        id: String(todo.id),
        label: todo.label,
        startDate: todo.startDate,
        updatedAt: todo.updatedAt,
        priority: todo.priority as Priority,
      };

      // if (todo.listId) {
      //   todo
      //     .item.list = {
      //       id: String(todo.listId),
      //       label: todo.listLabel,
      //       createdAt: todo.listCreatedAt,
      //     };
      // }

      output.push(item);
    }

    return output;
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
};
