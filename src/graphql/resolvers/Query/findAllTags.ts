import { Context } from '../../server.ts';
import { QueryResolvers } from '../../generated/server.ts';
import { db } from '../../../db/client.ts';

export const findAllTags: QueryResolvers<Context>['findAllTags'] = async (
  _parent,
  _args,
  _ctx,
  _info,
) => {
  const allTags = await db.selectFrom('tag')
    .selectAll()
    .execute();

  return allTags;
};
