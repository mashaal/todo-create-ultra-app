import { GraphQLClient } from 'graphql-request';

import { getSdkWithHooks } from './generated/client.ts';

export const endpoint = '/api/graphql';
export const client = new GraphQLClient(endpoint, { fetch });

export function getSDK() {
  return getSdkWithHooks(client);
}
