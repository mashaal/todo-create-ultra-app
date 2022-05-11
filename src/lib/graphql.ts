import { QueryClient } from 'react-query';
import { GraphQLClient } from 'graphql-request';

const root = Deno.env.get('root') || 'http://localhost:8000';

export const endpoint = `${root}/api/graphql`;

export const client = new GraphQLClient(endpoint);

export const queryClient = new QueryClient();
