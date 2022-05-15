import { Context } from '../../server.ts';
import { MutationResolvers, Todo } from '../../generated/server.ts';
import { db } from '../../../db/client.ts';

export const createTodo: MutationResolvers<Context>['createTodo'] = async (
  _parent,
  args,
  _ctx,
  _info,
) => {
  try {
    const newTodo = {
      completed: false,
      createdAt: new Date(),
      description: args.data.description,
      dueDate: args.data.dueDate,
      endDate: args.data.endDate,
      label: args.data.label,
      updatedAt: new Date(),
    };

    const createdTodo = await db.insertInto('todo').values([newTodo]).returning(
      [
        'completed',
        'createdAt',
        'description',
        'dueDate',
        'endDate',
        'id',
        'label',
        'listId',
        'updatedAt',
      ],
    ).execute();

    if (!createdTodo || !createdTodo[0]) {
      throw new Error('Todo not created');
    }

    const resultTodo: Todo = {
      ...createdTodo[0],
      id: String(createdTodo[0].id),
      completed: Boolean(createdTodo[0]),
      createdAt: createdTodo[0].createdAt.toISOString(),
      tags: [],
    };

    return resultTodo;
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
};
