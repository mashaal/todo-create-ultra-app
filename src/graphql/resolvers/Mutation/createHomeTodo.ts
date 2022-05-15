import { Context } from '../../server.ts';
import { Database } from '../../../db/schema.ts';
import { InsertObject, Selection } from 'kysely';
import { MutationResolvers, Priority, Todo } from '../../generated/server.ts';
import { db } from '../../../db/client.ts';

export const createHomeTodo: MutationResolvers<Context>['createHomeTodo'] =
  async (
    _parent,
    args,
    _ctx,
    _info,
  ) => {
    const transactionBuilder = db.transaction();

    return await transactionBuilder.execute(async (transaction) => {
      let listId;
      if (args.data.listLabel) {
        listId = await transaction.selectFrom('list').where(
          'label',
          '=',
          args.data.listLabel,
        ).select('id').executeTakeFirst();

        if (!listId) {
          listId = await transaction.insertInto('list').values([
            {
              label: args.data.listLabel,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]).returning('id').executeTakeFirstOrThrow();
        }
      }

      let projectId;
      if (args.data.projectLabel) {
        projectId = await transaction.selectFrom('project').where(
          'label',
          '=',
          args.data.projectLabel,
        ).select('id').executeTakeFirst();

        if (!projectId) {
          projectId = await transaction.insertInto('project').values([
            {
              label: args.data.projectLabel,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]).returning('id').executeTakeFirstOrThrow();
        }
      }

      let tagIds;
      if (args.data.tags) {
        let query = transaction.selectFrom('tag');

        for (const tag of args.data.tags) {
          query = query.orWhere('label', '=', tag);
        }

        const existingTags = await query.select(['id', 'label']).execute();

        const tagsToInsert = args.data.tags.filter((tag) => {
          return !existingTags.find((existingTag) => {
            return existingTag.label === tag;
          });
        });

        let newTags: Selection<Database, 'tag', 'id'>[];
        if (tagsToInsert.length > 0) {
          newTags = await transaction.insertInto('tag').values(
            tagsToInsert.map((entry) => {
              return {
                label: entry,
                createdAt: new Date(),
                updatedAt: new Date(),
              };
            }),
          ).returning('id').execute();
        } else {
          newTags = [];
        }

        const existingTagIds = existingTags.map((entry) => {
          return entry.id;
        });

        const newTagIds = newTags.map((entry) => {
          return entry.id;
        });

        tagIds = [...existingTagIds, ...newTagIds];
      }

      const newTodo: InsertObject<Database, 'todo'> = {
        label: args.data.label,
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      if (listId) {
        newTodo.listId = listId.id;
      }

      if (projectId) {
        newTodo.projectId = projectId.id;
      }

      const createdTodo = await transaction.insertInto('todo').values([
        newTodo,
      ]).returningAll().executeTakeFirstOrThrow();

      if (tagIds) {
        await transaction.insertInto('todo_tag').values(
          tagIds.map((entry) => {
            return {
              todoId: createdTodo.id,
              tagId: entry,
            };
          }),
        ).execute();
      }

      const resultTodo: Todo = {
        ...createdTodo,
        id: String(createdTodo.id),
        completed: Boolean(createdTodo),
        priority: createdTodo.priority as Priority,
        tags: [],
      };

      return resultTodo;
    });
  };
