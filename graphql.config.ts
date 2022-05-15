import type { IGraphQLConfig } from 'graphql-config'

const config: IGraphQLConfig = {
  schema: './src/graphql/schema.graphql',
  documents: './src/graphql/documents/**/*.graphql',
  extensions: {
    codegen: {
      generates: {
        './src/graphql/generated/server.ts': {
          plugins: [
            'typescript',
            'typescript-resolvers',
          ]
        },
        './src/graphql/generated/client.ts': {
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
}

export default config