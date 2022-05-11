import useSWR from 'swr';
import { request } from 'graphql-request';

const FAUNADB_KEY = Deno.env.get('FAUNADB_KEY');

const headers = new Headers();
headers.set('Authorization', `Bearer ${FAUNADB_KEY}`);

const fetcher = (query: string, variables: Record<string, unknown>) => {
  return request(
    'https://graphql.fauna.com/graphql',
    query,
    variables,
    headers,
  );
};

export function useQuery(query: string) {
  const { isValidating, mutate, data, error } = useSWR([query], fetcher);

  return {
    isValidating,
    isLoading: !data && !error,
    data,
    error,
    mutate,
  };
}

export function useMutation(
  query: string,
  variables: Record<string, unknown> = {},
) {
  const { isValidating, mutate, data, error } = useSWR(
    [query, variables],
    fetcher,
  );

  return {
    isValidating,
    isLoading: !data && !error,
    data,
    error,
    mutate,
  };
}
