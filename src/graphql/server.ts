import { YogaInitialContext } from '@graphql-yoga/common';
import { createServer } from '@graphql-yoga/common';
import { dirname, fromFileUrl, resolve } from 'std/path/mod.ts';
import { gql } from 'graphql-tag';
import {
  resolvers as scalarResolvers,
  typeDefs as scalarTypeDefs,
} from 'graphql-scalars';
import { useErrorHandler } from '@envelop/core';

import resolvers from './resolvers/mod.ts';

const schemaFilePath = resolve(
  `${dirname(fromFileUrl(import.meta.url))}/schema.graphql`,
);
const schemaFile = await Deno.readTextFile(schemaFilePath);

export type Context = YogaInitialContext;

const errorHandler = useErrorHandler<Context>((errors, _context) => {
  console.error(errors);
});

export const server = createServer({
  schema: {
    typeDefs: [
      ...scalarTypeDefs,
      gql(schemaFile),
    ],
    resolvers: {
      ...scalarResolvers,
      ...resolvers,
    },
  },
  logging: true,
  plugins: [errorHandler],
});
