import { GraphQLClient } from 'graphql-request';

export const endpoint = '/api/graphql';
export const client = new GraphQLClient(endpoint, { fetch });
