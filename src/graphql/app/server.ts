import { YogaInitialContext } from '@graphql-yoga/common';
import { createServer } from '@graphql-yoga/common';
import { dirname, fromFileUrl, resolve } from 'std/path/mod.ts';
import { gql } from 'graphql-tag';

import resolvers from './resolvers/mod.ts';

const schemaFilePath = resolve(
  `${dirname(fromFileUrl(import.meta.url))}/schema.graphql`,
);
const schemaFile = await Deno.readTextFile(schemaFilePath);

export type Context = YogaInitialContext;

export const server = createServer({
  schema: {
    typeDefs: gql(schemaFile),
    resolvers,
  },
});
