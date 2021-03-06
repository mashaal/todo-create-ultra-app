import { Context } from '../../server.ts';
import { QueryResolvers } from '../../generated/server.ts';
import { db } from '../../../db/client.ts';

export const findAllLists: QueryResolvers<Context>['findAllLists'] = async (
  _parent,
  _args,
  _ctx,
  _info,
) => {
  const allLists = await db.selectFrom('list')
    .selectAll()
    .execute();

  return allLists;
};
