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
    console.log('createHomeTodo', args.data);

    const transactionBuilder = db.transaction();

    return await transactionBuilder.execute(async (transaction) => {
      console.log('createHomeTodo:transaction');

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

      console.log('TAGS', args.data.tags);

      let tagIds;
      if (args.data.tags) {
        let query = transaction.selectFrom('tag');

        for (const tag of args.data.tags) {
          query = query.orWhere('label', '=', tag);
        }

        const existingTags = await query.select(['id', 'label']).execute();

        console.log('existingTags', existingTags);

        const tagsToInsert = args.data.tags.filter((tag) => {
          return !existingTags.find((existingTag) => {
            return existingTag.label === tag;
          });
        });

        console.log('tagsToInsert', tagsToInsert);

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

        console.log('existingTagIds', existingTagIds);

        const newTagIds = newTags.map((entry) => {
          return entry.id;
        });

        console.log('newTagIds', newTagIds);

        tagIds = [...existingTagIds, ...newTagIds];
      }

      console.log('listId', listId);
      console.log('projectId', projectId);

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

      console.log('newTodo', newTodo);

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

      console.log('resultTodo', resultTodo);

      return resultTodo;
    });
  };
