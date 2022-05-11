import { GraphQLClient } from 'graphql-request';
import { isServer } from './environment.ts';

const root = Deno.env.get('root') || 'http://localhost:8000';

export const endpoint = `${root}/api/graphql`;

export const client = new GraphQLClient(endpoint, { fetch });

if (isServer()) {
  client.setEndpoint('https://graphql.fauna.com/graphql');
  client.setHeader('Authorization', `Bearer ${Deno.env.get('FAUNADB_KEY')}`);
}
