import useSWR from 'swr';
import { request } from 'graphql-request';

const fetcher = (query: string, variables: Record<string, unknown>) => {
  return request(
    '/api/graphql',
    query,
    variables,
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
