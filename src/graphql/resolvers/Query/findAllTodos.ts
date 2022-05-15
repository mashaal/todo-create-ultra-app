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
      .execute();

    const allTodosWithRelations = await Promise.all(
      allTodos.map(async (entry) => {
        const item: Todo = {
          completed: Boolean(entry.completed),
          createdAt: entry.createdAt,
          description: entry.description,
          dueDate: entry.dueDate,
          endDate: entry.endDate,
          id: String(entry.id),
          label: entry.label,
          startDate: entry.startDate,
          updatedAt: entry.updatedAt,
          priority: entry.priority as Priority,
        };

        await Promise.all([
          (async () => {
            if (entry.listId) {
              const list = await db.selectFrom('list').where(
                'id',
                '=',
                entry.listId,
              )
                .selectAll().executeTakeFirstOrThrow();

              item.list = list;
            }
          })(),
          (async () => {
            if (entry.projectId) {
              const project = await db.selectFrom('project').where(
                'id',
                '=',
                entry.projectId,
              )
                .selectAll().executeTakeFirstOrThrow();

              item.project = project;
            }
          })(),
          (async () => {
            if (entry.tags) {
              let tagsQuery = db.selectFrom('tag');

              for (const tag of entry.tags) {
                tagsQuery = tagsQuery.orWhere('id', '=', tag.__select__);
              }

              const tags = await tagsQuery.selectAll().execute();

              item.tags = tags;
            }
          })(),
        ]);

        return item;
      }),
    );

    return allTodosWithRelations;
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
};
