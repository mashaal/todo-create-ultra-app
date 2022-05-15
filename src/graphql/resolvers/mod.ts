import * as Mutation from './Mutation/mod.ts';
import * as Query from './Query/mod.ts';
import { Context } from '../server.ts';
import { Resolvers } from '../generated/server.ts';

const resolvers: Resolvers<Context> = {
  Query,
  Mutation,
};

export default resolvers;
