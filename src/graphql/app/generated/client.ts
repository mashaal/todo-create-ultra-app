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
  Date: any;
};

export enum Frequency {
  Days = 'DAYS',
  Hours = 'HOURS',
  Months = 'MONTHS',
  Weeks = 'WEEKS',
  Years = 'YEARS'
}

export type List = {
  __typename?: 'List';
  label: Scalars['String'];
  todos: Array<Todo>;
};

export enum Priority {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM',
  Urgent = 'URGENT'
}

export type Project = {
  __typename?: 'Project';
  label: Scalars['String'];
  todos: Array<Todo>;
};

export type Query = {
  __typename?: 'Query';
  findAllLists: Array<List>;
  findAllProjects: Array<Project>;
  findAllTags: Array<Tag>;
  findAllTodos: Array<Todo>;
  findListById?: Maybe<List>;
  findListByLabel?: Maybe<List>;
  findProjectById?: Maybe<Project>;
  findProjectByLabel?: Maybe<Project>;
  findTagById?: Maybe<Tag>;
  findTagByLabel?: Maybe<Tag>;
  findTodoById?: Maybe<Todo>;
  findTodoByLabel?: Maybe<Todo>;
  findTodosByList: Array<Todo>;
  findTodosByProject: Array<Todo>;
  findTodosByTags: Array<Todo>;
};


export type QueryFindListByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindListByLabelArgs = {
  label: Scalars['String'];
};


export type QueryFindProjectByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindProjectByLabelArgs = {
  label: Scalars['String'];
};


export type QueryFindTagByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindTagByLabelArgs = {
  label: Scalars['String'];
};


export type QueryFindTodoByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindTodoByLabelArgs = {
  label: Scalars['String'];
};


export type QueryFindTodosByListArgs = {
  listLabel: Scalars['String'];
};


export type QueryFindTodosByProjectArgs = {
  projectLabel: Scalars['String'];
};


export type QueryFindTodosByTagsArgs = {
  tagLabels: Array<Scalars['String']>;
};

export type Repeat = {
  __typename?: 'Repeat';
  frequency: Frequency;
  interval: Scalars['Int'];
};

export type Tag = {
  __typename?: 'Tag';
  label: Scalars['String'];
  todos: Array<Todo>;
};

export type Todo = {
  __typename?: 'Todo';
  _id: Scalars['ID'];
  completed: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  label: Scalars['String'];
  list?: Maybe<List>;
  priority?: Maybe<Priority>;
  project?: Maybe<Project>;
  repeat?: Maybe<Repeat>;
  startDate?: Maybe<Scalars['Date']>;
  tags: Array<Tag>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type ListFragmentFragment = { __typename?: 'List', label: string };

export type ProjectFragmentFragment = { __typename?: 'Project', label: string };

export type RepeatFragmentFragment = { __typename?: 'Repeat', frequency: Frequency, interval: number };

export type TagFragmentFragment = { __typename?: 'Tag', label: string };

export type TodoFragmentFragment = { __typename?: 'Todo', _id: string, label: string, completed: boolean, priority?: Priority | null, description?: string | null, dueDate?: any | null, startDate?: any | null, endDate?: any | null, createdAt?: any | null, updatedAt?: any | null, list?: { __typename?: 'List', label: string } | null, project?: { __typename?: 'Project', label: string } | null, tags: Array<{ __typename?: 'Tag', label: string }>, repeat?: { __typename?: 'Repeat', frequency: Frequency, interval: number } | null };

export type FindAllListsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllListsQuery = { __typename?: 'Query', findAllLists: Array<{ __typename?: 'List', label: string }> };

export type FindAllProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllProjectsQuery = { __typename?: 'Query', findAllProjects: Array<{ __typename?: 'Project', label: string }> };

export type FindAllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllTagsQuery = { __typename?: 'Query', findAllTags: Array<{ __typename?: 'Tag', label: string }> };

export type FindAllTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllTodosQuery = { __typename?: 'Query', findAllTodos: Array<{ __typename?: 'Todo', _id: string, label: string, completed: boolean, priority?: Priority | null, description?: string | null, dueDate?: any | null, startDate?: any | null, endDate?: any | null, createdAt?: any | null, updatedAt?: any | null, list?: { __typename?: 'List', label: string } | null, project?: { __typename?: 'Project', label: string } | null, tags: Array<{ __typename?: 'Tag', label: string }>, repeat?: { __typename?: 'Repeat', frequency: Frequency, interval: number } | null }> };

export type FindListByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindListByIdQuery = { __typename?: 'Query', findListById?: { __typename?: 'List', label: string } | null };

export type FindListByLabelQueryVariables = Exact<{
  label: Scalars['String'];
}>;


export type FindListByLabelQuery = { __typename?: 'Query', findListByLabel?: { __typename?: 'List', label: string } | null };

export type FindProjectByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindProjectByIdQuery = { __typename?: 'Query', findProjectById?: { __typename?: 'Project', label: string } | null };

export type FindProjectByLabelQueryVariables = Exact<{
  label: Scalars['String'];
}>;


export type FindProjectByLabelQuery = { __typename?: 'Query', findProjectByLabel?: { __typename?: 'Project', label: string } | null };

export type FindTagByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindTagByIdQuery = { __typename?: 'Query', findTagById?: { __typename?: 'Tag', label: string } | null };

export type FindTagByLabelQueryVariables = Exact<{
  label: Scalars['String'];
}>;


export type FindTagByLabelQuery = { __typename?: 'Query', findTagByLabel?: { __typename?: 'Tag', label: string } | null };

export type FindTodoByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindTodoByIdQuery = { __typename?: 'Query', findTodoById?: { __typename?: 'Todo', _id: string, label: string, completed: boolean, priority?: Priority | null, description?: string | null, dueDate?: any | null, startDate?: any | null, endDate?: any | null, createdAt?: any | null, updatedAt?: any | null, list?: { __typename?: 'List', label: string } | null, project?: { __typename?: 'Project', label: string } | null, tags: Array<{ __typename?: 'Tag', label: string }>, repeat?: { __typename?: 'Repeat', frequency: Frequency, interval: number } | null } | null };

export type FindTodoByLabelQueryVariables = Exact<{
  label: Scalars['String'];
}>;


export type FindTodoByLabelQuery = { __typename?: 'Query', findTodoByLabel?: { __typename?: 'Todo', _id: string, label: string, completed: boolean, priority?: Priority | null, description?: string | null, dueDate?: any | null, startDate?: any | null, endDate?: any | null, createdAt?: any | null, updatedAt?: any | null, list?: { __typename?: 'List', label: string } | null, project?: { __typename?: 'Project', label: string } | null, tags: Array<{ __typename?: 'Tag', label: string }>, repeat?: { __typename?: 'Repeat', frequency: Frequency, interval: number } | null } | null };

export type FindTodosByListQueryVariables = Exact<{
  listLabel: Scalars['String'];
}>;


export type FindTodosByListQuery = { __typename?: 'Query', findTodosByList: Array<{ __typename?: 'Todo', _id: string, label: string, completed: boolean, priority?: Priority | null, description?: string | null, dueDate?: any | null, startDate?: any | null, endDate?: any | null, createdAt?: any | null, updatedAt?: any | null, list?: { __typename?: 'List', label: string } | null, project?: { __typename?: 'Project', label: string } | null, tags: Array<{ __typename?: 'Tag', label: string }>, repeat?: { __typename?: 'Repeat', frequency: Frequency, interval: number } | null }> };

export type FindTodosByProjectQueryVariables = Exact<{
  projectLabel: Scalars['String'];
}>;


export type FindTodosByProjectQuery = { __typename?: 'Query', findTodosByProject: Array<{ __typename?: 'Todo', _id: string, label: string, completed: boolean, priority?: Priority | null, description?: string | null, dueDate?: any | null, startDate?: any | null, endDate?: any | null, createdAt?: any | null, updatedAt?: any | null, list?: { __typename?: 'List', label: string } | null, project?: { __typename?: 'Project', label: string } | null, tags: Array<{ __typename?: 'Tag', label: string }>, repeat?: { __typename?: 'Repeat', frequency: Frequency, interval: number } | null }> };

export type FindTodosByTagsQueryVariables = Exact<{
  tagLabels: Array<Scalars['String']> | Scalars['String'];
}>;


export type FindTodosByTagsQuery = { __typename?: 'Query', findTodosByTags: Array<{ __typename?: 'Todo', _id: string, label: string, completed: boolean, priority?: Priority | null, description?: string | null, dueDate?: any | null, startDate?: any | null, endDate?: any | null, createdAt?: any | null, updatedAt?: any | null, list?: { __typename?: 'List', label: string } | null, project?: { __typename?: 'Project', label: string } | null, tags: Array<{ __typename?: 'Tag', label: string }>, repeat?: { __typename?: 'Repeat', frequency: Frequency, interval: number } | null }> };

export const ListFragmentFragmentDoc = gql`
    fragment ListFragment on List {
  label
}
    `;
export const ProjectFragmentFragmentDoc = gql`
    fragment ProjectFragment on Project {
  label
}
    `;
export const TagFragmentFragmentDoc = gql`
    fragment TagFragment on Tag {
  label
}
    `;
export const RepeatFragmentFragmentDoc = gql`
    fragment RepeatFragment on Repeat {
  frequency
  interval
}
    `;
export const TodoFragmentFragmentDoc = gql`
    fragment TodoFragment on Todo {
  _id
  label
  completed
  list {
    ...ListFragment
  }
  project {
    ...ProjectFragment
  }
  tags {
    ...TagFragment
  }
  priority
  repeat {
    ...RepeatFragment
  }
  description
  dueDate
  startDate
  endDate
  createdAt
  updatedAt
}
    ${ListFragmentFragmentDoc}
${ProjectFragmentFragmentDoc}
${TagFragmentFragmentDoc}
${RepeatFragmentFragmentDoc}`;
export const FindAllListsDocument = gql`
    query findAllLists {
  findAllLists {
    ...ListFragment
  }
}
    ${ListFragmentFragmentDoc}`;
export const FindAllProjectsDocument = gql`
    query findAllProjects {
  findAllProjects {
    ...ProjectFragment
  }
}
    ${ProjectFragmentFragmentDoc}`;
export const FindAllTagsDocument = gql`
    query findAllTags {
  findAllTags {
    ...TagFragment
  }
}
    ${TagFragmentFragmentDoc}`;
export const FindAllTodosDocument = gql`
    query findAllTodos {
  findAllTodos {
    ...TodoFragment
  }
}
    ${TodoFragmentFragmentDoc}`;
export const FindListByIdDocument = gql`
    query findListById($id: ID!) {
  findListById(id: $id) {
    ...ListFragment
  }
}
    ${ListFragmentFragmentDoc}`;
export const FindListByLabelDocument = gql`
    query findListByLabel($label: String!) {
  findListByLabel(label: $label) {
    ...ListFragment
  }
}
    ${ListFragmentFragmentDoc}`;
export const FindProjectByIdDocument = gql`
    query findProjectById($id: ID!) {
  findProjectById(id: $id) {
    ...ProjectFragment
  }
}
    ${ProjectFragmentFragmentDoc}`;
export const FindProjectByLabelDocument = gql`
    query findProjectByLabel($label: String!) {
  findProjectByLabel(label: $label) {
    ...ProjectFragment
  }
}
    ${ProjectFragmentFragmentDoc}`;
export const FindTagByIdDocument = gql`
    query findTagById($id: ID!) {
  findTagById(id: $id) {
    ...TagFragment
  }
}
    ${TagFragmentFragmentDoc}`;
export const FindTagByLabelDocument = gql`
    query findTagByLabel($label: String!) {
  findTagByLabel(label: $label) {
    ...TagFragment
  }
}
    ${TagFragmentFragmentDoc}`;
export const FindTodoByIdDocument = gql`
    query findTodoById($id: ID!) {
  findTodoById(id: $id) {
    ...TodoFragment
  }
}
    ${TodoFragmentFragmentDoc}`;
export const FindTodoByLabelDocument = gql`
    query findTodoByLabel($label: String!) {
  findTodoByLabel(label: $label) {
    ...TodoFragment
  }
}
    ${TodoFragmentFragmentDoc}`;
export const FindTodosByListDocument = gql`
    query findTodosByList($listLabel: String!) {
  findTodosByList(listLabel: $listLabel) {
    ...TodoFragment
  }
}
    ${TodoFragmentFragmentDoc}`;
export const FindTodosByProjectDocument = gql`
    query findTodosByProject($projectLabel: String!) {
  findTodosByProject(projectLabel: $projectLabel) {
    ...TodoFragment
  }
}
    ${TodoFragmentFragmentDoc}`;
export const FindTodosByTagsDocument = gql`
    query findTodosByTags($tagLabels: [String!]!) {
  findTodosByTags(tagLabels: $tagLabels) {
    ...TodoFragment
  }
}
    ${TodoFragmentFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    findAllLists(variables?: FindAllListsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindAllListsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindAllListsQuery>(FindAllListsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findAllLists', 'query');
    },
    findAllProjects(variables?: FindAllProjectsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindAllProjectsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindAllProjectsQuery>(FindAllProjectsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findAllProjects', 'query');
    },
    findAllTags(variables?: FindAllTagsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindAllTagsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindAllTagsQuery>(FindAllTagsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findAllTags', 'query');
    },
    findAllTodos(variables?: FindAllTodosQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindAllTodosQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindAllTodosQuery>(FindAllTodosDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findAllTodos', 'query');
    },
    findListById(variables: FindListByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindListByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindListByIdQuery>(FindListByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findListById', 'query');
    },
    findListByLabel(variables: FindListByLabelQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindListByLabelQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindListByLabelQuery>(FindListByLabelDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findListByLabel', 'query');
    },
    findProjectById(variables: FindProjectByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindProjectByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindProjectByIdQuery>(FindProjectByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findProjectById', 'query');
    },
    findProjectByLabel(variables: FindProjectByLabelQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindProjectByLabelQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindProjectByLabelQuery>(FindProjectByLabelDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findProjectByLabel', 'query');
    },
    findTagById(variables: FindTagByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindTagByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindTagByIdQuery>(FindTagByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findTagById', 'query');
    },
    findTagByLabel(variables: FindTagByLabelQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindTagByLabelQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindTagByLabelQuery>(FindTagByLabelDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findTagByLabel', 'query');
    },
    findTodoById(variables: FindTodoByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindTodoByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindTodoByIdQuery>(FindTodoByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findTodoById', 'query');
    },
    findTodoByLabel(variables: FindTodoByLabelQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindTodoByLabelQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindTodoByLabelQuery>(FindTodoByLabelDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findTodoByLabel', 'query');
    },
    findTodosByList(variables: FindTodosByListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindTodosByListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindTodosByListQuery>(FindTodosByListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findTodosByList', 'query');
    },
    findTodosByProject(variables: FindTodosByProjectQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindTodosByProjectQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindTodosByProjectQuery>(FindTodosByProjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findTodosByProject', 'query');
    },
    findTodosByTags(variables: FindTodosByTagsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindTodosByTagsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindTodosByTagsQuery>(FindTodosByTagsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findTodosByTags', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export function getSdkWithHooks(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  const sdk = getSdk(client, withWrapper);
  return {
    ...sdk,
    useFindAllLists(key: SWRKeyInterface, variables?: FindAllListsQueryVariables, config?: SWRConfigInterface<FindAllListsQuery, ClientError>) {
      return useSWR<FindAllListsQuery, ClientError>(key, () => sdk.findAllLists(variables), config);
    },
    useFindAllProjects(key: SWRKeyInterface, variables?: FindAllProjectsQueryVariables, config?: SWRConfigInterface<FindAllProjectsQuery, ClientError>) {
      return useSWR<FindAllProjectsQuery, ClientError>(key, () => sdk.findAllProjects(variables), config);
    },
    useFindAllTags(key: SWRKeyInterface, variables?: FindAllTagsQueryVariables, config?: SWRConfigInterface<FindAllTagsQuery, ClientError>) {
      return useSWR<FindAllTagsQuery, ClientError>(key, () => sdk.findAllTags(variables), config);
    },
    useFindAllTodos(key: SWRKeyInterface, variables?: FindAllTodosQueryVariables, config?: SWRConfigInterface<FindAllTodosQuery, ClientError>) {
      return useSWR<FindAllTodosQuery, ClientError>(key, () => sdk.findAllTodos(variables), config);
    },
    useFindListById(key: SWRKeyInterface, variables: FindListByIdQueryVariables, config?: SWRConfigInterface<FindListByIdQuery, ClientError>) {
      return useSWR<FindListByIdQuery, ClientError>(key, () => sdk.findListById(variables), config);
    },
    useFindListByLabel(key: SWRKeyInterface, variables: FindListByLabelQueryVariables, config?: SWRConfigInterface<FindListByLabelQuery, ClientError>) {
      return useSWR<FindListByLabelQuery, ClientError>(key, () => sdk.findListByLabel(variables), config);
    },
    useFindProjectById(key: SWRKeyInterface, variables: FindProjectByIdQueryVariables, config?: SWRConfigInterface<FindProjectByIdQuery, ClientError>) {
      return useSWR<FindProjectByIdQuery, ClientError>(key, () => sdk.findProjectById(variables), config);
    },
    useFindProjectByLabel(key: SWRKeyInterface, variables: FindProjectByLabelQueryVariables, config?: SWRConfigInterface<FindProjectByLabelQuery, ClientError>) {
      return useSWR<FindProjectByLabelQuery, ClientError>(key, () => sdk.findProjectByLabel(variables), config);
    },
    useFindTagById(key: SWRKeyInterface, variables: FindTagByIdQueryVariables, config?: SWRConfigInterface<FindTagByIdQuery, ClientError>) {
      return useSWR<FindTagByIdQuery, ClientError>(key, () => sdk.findTagById(variables), config);
    },
    useFindTagByLabel(key: SWRKeyInterface, variables: FindTagByLabelQueryVariables, config?: SWRConfigInterface<FindTagByLabelQuery, ClientError>) {
      return useSWR<FindTagByLabelQuery, ClientError>(key, () => sdk.findTagByLabel(variables), config);
    },
    useFindTodoById(key: SWRKeyInterface, variables: FindTodoByIdQueryVariables, config?: SWRConfigInterface<FindTodoByIdQuery, ClientError>) {
      return useSWR<FindTodoByIdQuery, ClientError>(key, () => sdk.findTodoById(variables), config);
    },
    useFindTodoByLabel(key: SWRKeyInterface, variables: FindTodoByLabelQueryVariables, config?: SWRConfigInterface<FindTodoByLabelQuery, ClientError>) {
      return useSWR<FindTodoByLabelQuery, ClientError>(key, () => sdk.findTodoByLabel(variables), config);
    },
    useFindTodosByList(key: SWRKeyInterface, variables: FindTodosByListQueryVariables, config?: SWRConfigInterface<FindTodosByListQuery, ClientError>) {
      return useSWR<FindTodosByListQuery, ClientError>(key, () => sdk.findTodosByList(variables), config);
    },
    useFindTodosByProject(key: SWRKeyInterface, variables: FindTodosByProjectQueryVariables, config?: SWRConfigInterface<FindTodosByProjectQuery, ClientError>) {
      return useSWR<FindTodosByProjectQuery, ClientError>(key, () => sdk.findTodosByProject(variables), config);
    },
    useFindTodosByTags(key: SWRKeyInterface, variables: FindTodosByTagsQueryVariables, config?: SWRConfigInterface<FindTodosByTagsQuery, ClientError>) {
      return useSWR<FindTodosByTagsQuery, ClientError>(key, () => sdk.findTodosByTags(variables), config);
    }
  };
}
export type SdkWithHooks = ReturnType<typeof getSdkWithHooks>;