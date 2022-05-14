import { YogaInitialContext } from '@graphql-yoga/common';
import { createServer } from '@graphql-yoga/common';
import { dirname, fromFileUrl, resolve } from 'std/path/mod.ts';
import { gql } from 'graphql-tag';

import { Resolvers } from './generated/server.ts';

const schemaFilePath = resolve(
  `${dirname(fromFileUrl(import.meta.url))}/schema.graphql`,
);
const schemaFile = await Deno.readTextFile(schemaFilePath);

type Context = YogaInitialContext;

export const resolvers: Resolvers<Context> = {
  Query: {
    allTodos: (_parent, _args, _ctx, _info) => {
      return [
        {
          id: '1',
          label: 'Learn GraphQL',
          complete: false,
        },
      ];
    },
  },
};

export const server = createServer({
  schema: {
    typeDefs: gql(schemaFile),
    resolvers,
  },
});
