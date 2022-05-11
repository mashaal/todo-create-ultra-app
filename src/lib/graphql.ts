import { GraphQLClient } from 'graphql-request';
import { isServer } from './environment.ts';

export let endpoint = '/api/graphql';
export let client = new GraphQLClient(endpoint, { fetch });

if (isServer()) {
  endpoint = 'https://graphql.fauna.com/graphql';
  client = new GraphQLClient(endpoint, { fetch });
  client.setHeader('Authorization', `Bearer ${Deno.env.get('FAUNADB_KEY')}`);
}
