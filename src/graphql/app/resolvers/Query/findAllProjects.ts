import { Context } from '../../server.ts';
import { QueryResolvers } from '../../generated/server.ts';
import { db } from '../../../../db/client.ts';

export const findAllProjects: QueryResolvers<Context>['findAllProjects'] =
  async (
    _parent,
    _args,
    _ctx,
    _info,
  ) => {
    try {
      console.log('findAllProjects');

      const allProjects = await db.selectFrom('project')
        .selectAll()
        .execute();

      console.log('findAllProjects:allProjects', allProjects);

      return [];
    } catch (error: unknown) {
      console.error(error);
      throw error;
    }
  };
