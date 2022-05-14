import { Context } from '../../server.ts';
import { QueryResolvers } from '../../generated/server.ts';
import { db } from '../../../../db/client.ts';

export const findAllLists: QueryResolvers<Context>['findAllLists'] = async (
  _parent,
  _args,
  _ctx,
  _info,
) => {
  try {
    console.log('findAllLists');

    const allLists = await db.selectFrom('list')
      .selectAll()
      .execute();

    console.log('findAllLists:allLists', allLists);

    return allLists;

    // return allLists.map((list) => {
    //   const output: List = {
    //     ...list,
    //   };
    //   return output,
    // });
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
};
