import { GraphQLClient } from 'graphql-request';

import { getSdk } from './generated/client.ts';

export const endpoint = 'https://graphql.fauna.com/graphql';
export const client = new GraphQLClient(endpoint, { fetch });
client.setHeader('Authorization', `Bearer ${Deno.env.get('FAUNADB_KEY')}`);

export function getSDK() {
  return getSdk(client);
}
