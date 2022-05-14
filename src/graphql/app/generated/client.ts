import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
import { ClientError } from 'graphql-request/dist/types';
import useSWR, { SWRConfiguration as SWRConfigInterface, Key as SWRKeyInterface } from 'swr';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  allTodos: Array<Todo>;
};

export type Todo = {
  __typename?: 'Todo';
  complete: Scalars['Boolean'];
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type AllTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTodosQuery = { __typename?: 'Query', allTodos: Array<{ __typename?: 'Todo', id: string, label: string, complete: boolean }> };


export const AllTodosDocument = gql`
    query allTodos {
  allTodos {
    id
    label
    complete
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    allTodos(variables?: AllTodosQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AllTodosQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllTodosQuery>(AllTodosDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'allTodos', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export function getSdkWithHooks(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  const sdk = getSdk(client, withWrapper);
  return {
    ...sdk,
    useAllTodos(key: SWRKeyInterface, variables?: AllTodosQueryVariables, config?: SWRConfigInterface<AllTodosQuery, ClientError>) {
      return useSWR<AllTodosQuery, ClientError>(key, () => sdk.allTodos(variables), config);
    }
  };
}
export type SdkWithHooks = ReturnType<typeof getSdkWithHooks>;