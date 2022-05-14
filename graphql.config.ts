import type { IGraphQLConfig } from 'graphql-config'

const config: IGraphQLConfig = {
  projects: {
    app: {
      schema: './src/graphql/app/schema.graphql',
      documents: './src/graphql/app/documents/**/*.graphql',
      extensions: {
        codegen: {
          generates: {
            './src/graphql/app/generated/server.ts': {
              plugins: [
                'typescript',
                'typescript-resolvers',
              ]
            },
            './src/graphql/app/generated/client.ts': {
              plugins: [
                'typescript',
                'typescript-operations',
                'typescript-graphql-request',
                'plugin-typescript-swr',
              ]
            }
          }
        }
      }
    },

    faunadb: {
      schema: [
        {
          'https://graphql.fauna.com/graphql': {
            headers: {
              // This file is ran by node.js, not deno.
              // @ts-ignore
              Authorization: `Bearer ${process.env['FAUNADB_KEY']}`,
            }
          }
        }
      ],
      documents: './src/graphql/faunadb/**/*.graphql',
      extensions: {
        codegen: {
          generates: {
            './src/graphql/faunadb/generated/server.ts': {
              plugins: [
                'typescript',
                'typescript-resolvers',
              ]
            },
            './src/graphql/faunadb/generated/client.ts': {
              plugins: [
                'typescript',
                'typescript-operations',
                'typescript-graphql-request',
                'plugin-typescript-swr',
              ]
            }
          }
        }
      }
    },
  }
}

export default config