import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  Date: any;
};

export type CreateHomeTodoInput = {
  label: Scalars['String'];
  listLabel?: InputMaybe<Scalars['String']>;
  projectLabel?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type CreateListInput = {
  label: Scalars['String'];
};

export type CreateProjectInput = {
  label: Scalars['String'];
};

export type CreateTagInput = {
  label: Scalars['String'];
};

export type CreateTodoInput = {
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['Date']>;
  endDate?: InputMaybe<Scalars['Date']>;
  label: Scalars['String'];
  list?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Priority>;
  project?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['Date']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
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
  createdAt: Scalars['Date'];
  id: Scalars['BigInt'];
  label: Scalars['String'];
  todos?: Maybe<Array<Todo>>;
  updatedAt: Scalars['Date'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createHomeTodo: Todo;
  createList: List;
  createProject: Project;
  createTag: Tag;
  createTodo: Todo;
  removeList: List;
  removeProject: Project;
  removeTag: Tag;
  removeTodo: Todo;
  updateList: List;
  updateProject: Project;
  updateTag: Tag;
  updateTodo: Todo;
};


export type MutationCreateHomeTodoArgs = {
  data: CreateHomeTodoInput;
};


export type MutationCreateListArgs = {
  data: CreateListInput;
};


export type MutationCreateProjectArgs = {
  data: CreateProjectInput;
};


export type MutationCreateTagArgs = {
  data: CreateTagInput;
};


export type MutationCreateTodoArgs = {
  data: CreateTodoInput;
};


export type MutationRemoveListArgs = {
  id: Scalars['BigInt'];
};


export type MutationRemoveProjectArgs = {
  id: Scalars['BigInt'];
};


export type MutationRemoveTagArgs = {
  id: Scalars['BigInt'];
};


export type MutationRemoveTodoArgs = {
  id: Scalars['BigInt'];
};


export type MutationUpdateListArgs = {
  data: UpdateListInput;
  id: Scalars['BigInt'];
};


export type MutationUpdateProjectArgs = {
  data: UpdateProjectInput;
  id: Scalars['BigInt'];
};


export type MutationUpdateTagArgs = {
  data: UpdateTagInput;
  id: Scalars['BigInt'];
};


export type MutationUpdateTodoArgs = {
  data: UpdateTodoInput;
  id: Scalars['BigInt'];
};

export enum Priority {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM',
  Urgent = 'URGENT'
}

export type Project = {
  __typename?: 'Project';
  createdAt: Scalars['Date'];
  id: Scalars['BigInt'];
  label: Scalars['String'];
  todos?: Maybe<Array<Todo>>;
  updatedAt: Scalars['Date'];
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
  id: Scalars['BigInt'];
};


export type QueryFindListByLabelArgs = {
  label: Scalars['String'];
};


export type QueryFindProjectByIdArgs = {
  id: Scalars['BigInt'];
};


export type QueryFindProjectByLabelArgs = {
  label: Scalars['String'];
};


export type QueryFindTagByIdArgs = {
  id: Scalars['BigInt'];
};


export type QueryFindTagByLabelArgs = {
  label: Scalars['String'];
};


export type QueryFindTodoByIdArgs = {
  id: Scalars['BigInt'];
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

export type Tag = {
  __typename?: 'Tag';
  createdAt: Scalars['Date'];
  id: Scalars['BigInt'];
  label: Scalars['String'];
  todos?: Maybe<Array<Todo>>;
  updatedAt: Scalars['Date'];
};

export type Todo = {
  __typename?: 'Todo';
  completed: Scalars['Boolean'];
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  id: Scalars['BigInt'];
  label: Scalars['String'];
  list?: Maybe<List>;
  priority?: Maybe<Priority>;
  project?: Maybe<Project>;
  startDate?: Maybe<Scalars['Date']>;
  tags?: Maybe<Array<Tag>>;
  updatedAt: Scalars['Date'];
};

export type UpdateListInput = {
  label: Scalars['String'];
};

export type UpdateProjectInput = {
  id: Scalars['BigInt'];
  label: Scalars['String'];
};

export type UpdateTagInput = {
  id: Scalars['BigInt'];
  label: Scalars['String'];
};

export type UpdateTodoInput = {
  completed: Scalars['Boolean'];
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['Date']>;
  endDate?: InputMaybe<Scalars['Date']>;
  id: Scalars['BigInt'];
  label: Scalars['String'];
  list?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<Priority>;
  project?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['Date']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type CreateHomeTodoMutationVariables = Exact<{
  data: CreateHomeTodoInput;
}>;


export type CreateHomeTodoMutation = { __typename?: 'Mutation', createHomeTodo: { __typename?: 'Todo', id: any, label: string, completed: boolean, priority?: Priority | null, description?: string | null, dueDate?: any | null, startDate?: any | null, endDate?: any | null, createdAt: any, updatedAt: any, list?: { __typename?: 'List', id: any, label: string } | null, project?: { __typename?: 'Project', id: any, label: string } | null, tags?: Array<{ __typename?: 'Tag', id: any, label: string }> | null } };

export type CreateListMutationVariables = Exact<{
  data: CreateListInput;
}>;


export type CreateListMutation = { __typename?: 'Mutation', createList: { __typename?: 'List', id: any, label: string } };

export type CreateProjectMutationVariables = Exact<{
  data: CreateProjectInput;
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject: { __typename?: 'Project', id: any, label: string } };

export type CreateTagMutationVariables = Exact<{
  data: CreateTagInput;
}>;


export type CreateTagMutation = { __typename?: 'Mutation', createTag: { __typename?: 'Tag', id: any, label: string } };

export type CreateTodoMutationVariables = Exact<{
  data: CreateTodoInput;
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo: { __typename?: 'Todo', id: any, label: string, completed: boolean, priority?: Priority | null, description?: string | null, dueDate?: any | null, startDate?: any | null, endDate?: any | null, createdAt: any, updatedAt: any, list?: { __typename?: 'List', id: any, label: string } | null, project?: { __typename?: 'Project', id: any, label: string } | null, tags?: Array<{ __typename?: 'Tag', id: any, label: string }> | null } };

export type RemoveListMutationVariables = Exact<{
  id: Scalars['BigInt'];
}>;


export type RemoveListMutation = { __typename?: 'Mutation', removeList: { __typename?: 'List', id: any } };

export type RemoveProjectMutationVariables = Exact<{
  id: Scalars['BigInt'];
}>;


export type RemoveProjectMutation = { __typename?: 'Mutation', removeProject: { __typename?: 'Project', id: any } };

export type RemoveTagMutationVariables = Exact<{
  id: Scalars['BigInt'];
}>;


export type RemoveTagMutation = { __typename?: 'Mutation', removeTag: { __typename?: 'Tag', id: any } };

export type RemoveTodoMutationVariables = Exact<{
  id: Scalars['BigInt'];
}>;


export type RemoveTodoMutation = { __typename?: 'Mutation', removeTodo: { __typename?: 'Todo', id: any } };

export type UpdateListMutationVariables = Exact<{
  id: Scalars['BigInt'];
  data: UpdateListInput;
}>;


export type UpdateListMutation = { __typename?: 'Mutation', updateList: { __typename?: 'List', id: any, label: string } };

export type UpdateProjectMutationVariables = Exact<{
  id: Scalars['BigInt'];
  data: UpdateProjectInput;
}>;


export type UpdateProjectMutation = { __typename?: 'Mutation', updateProject: { __typename?: 'Project', id: any, label: string } };

export type UpdateTagMutationVariables = Exact<{
  id: Scalars['BigInt'];
  data: UpdateTagInput;
}>;


export type UpdateTagMutation = { __typename?: 'Mutation', updateTag: { __typename?: 'Tag', id: any, label: string } };

export type UpdateTodoMutationVariables = Exact<{
  id: Scalars['BigInt'];
  data: UpdateTodoInput;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo: { __typename?: 'Todo', id: any, label: string, completed: boolean, priority?: Priority | null, description?: string | null, dueDate?: any | null, startDate?: any | null, endDate?: any | null, createdAt: any, updatedAt: any, list?: { __typename?: 'List', id: any, label: string } | null, project?: { __typename?: 'Project', id: any, label: string } | null, tags?: Array<{ __typename?: 'Tag', id: any, label: string }> | null } };

export type ListFragmentFragment = { __typename?: 'List', id: any, label: string };

export type ProjectFragmentFragment = { __typename?: 'Project', id: any, label: string };

export type TagFragmentFragment = { __typename?: 'Tag', id: any, label: string };

export type TodoFragmentFragment = { __typename?: 'Todo', id: any, label: string, completed: boolean, priority?: Priority | null, description?: string | null, dueDate?: any | null, startDate?: any | null, endDate?: any | null, createdAt: any, updatedAt: any, list?: { __typename?: 'List', id: any, label: string } | null, project?: { __typename?: 'Project', id: any, label: string } | null, tags?: Array<{ __typename?: 'Tag', id: any, label: string }> | null };

export type FindAllListsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllListsQuery = { __typename?: 'Query', findAllLists: Array<{ __typename?: 'List', id: any, label: string }> };

export type FindAllProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllProjectsQuery = { __typename?: 'Query', findAllProjects: Array<{ __typename?: 'Project', id: any, label: string }> };

export type FindAllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllTagsQuery = { __typename?: 'Query', findAllTags: Array<{ __typename?: 'Tag', id: any, label: string }> };

export type FindAllTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllTodosQuery = { __typename?: 'Query', findAllTodos: Array<{ __typename?: 'Todo', id: any, label: string, completed: boolean, priority?: Priority | null, description?: string | null, dueDate?: any | null, startDate?: any | null, endDate?: any | null, createdAt: any, updatedAt: any, list?: { __typename?: 'List', id: any, label: string } | null, project?: { __typename?: 'Project', id: any, label: string } | null, tags?: Array<{ __typename?: 'Tag', id: any, label: string }> | null }> };

export type FindListByIdQueryVariables = Exact<{
  id: Scalars['BigInt'];
}>;


export type FindListByIdQuery = { __typename?: 'Query', findListById?: { __typename?: 'List', id: any, label: string } | null };

export type FindListByLabelQueryVariables = Exact<{
  label: Scalars['String'];
}>;


export type FindListByLabelQuery = { __typename?: 'Query', findListByLabel?: { __typename?: 'List', id: any, label: string } | null };

export type FindProjectByIdQueryVariables = Exact<{
  id: Scalars['BigInt'];
}>;


export type FindProjectByIdQuery = { __typename?: 'Query', findProjectById?: { __typename?: 'Project', id: any, label: string } | null };

export type FindProjectByLabelQueryVariables = Exact<{
  label: Scalars['String'];
}>;


export type FindProjectByLabelQuery = { __typename?: 'Query', findProjectByLabel?: { __typename?: 'Project', id: any, label: string } | null };

export type FindTagByIdQueryVariables = Exact<{
  id: Scalars['BigInt'];
}>;


export type FindTagByIdQuery = { __typename?: 'Query', findTagById?: { __typename?: 'Tag', id: any, label: string } | null };

export type FindTagByLabelQueryVariables = Exact<{
  label: Scalars['String'];
}>;


export type FindTagByLabelQuery = { __typename?: 'Query', findTagByLabel?: { __typename?: 'Tag', id: any, label: string } | null };

export type FindTodoByIdQueryVariables = Exact<{
  id: Scalars['BigInt'];
}>;


export type FindTodoByIdQuery = { __typename?: 'Query', findTodoById?: { __typename?: 'Todo', id: any, label: string, completed: boolean, priority?: Priority | null, description?: string | null, dueDate?: any | null, startDate?: any | null, endDate?: any | null, createdAt: any, updatedAt: any, list?: { __typename?: 'List', id: any, label: string } | null, project?: { __typename?: 'Project', id: any, label: string } | null, tags?: Array<{ __typename?: 'Tag', id: any, label: string }> | null } | null };

export type FindTodoByLabelQueryVariables = Exact<{
  label: Scalars['String'];
}>;


export type FindTodoByLabelQuery = { __typename?: 'Query', findTodoByLabel?: { __typename?: 'Todo', id: any, label: string, completed: boolean, priority?: Priority | null, description?: string | null, dueDate?: any | null, startDate?: any | null, endDate?: any | null, createdAt: any, updatedAt: any, list?: { __typename?: 'List', id: any, label: string } | null, project?: { __typename?: 'Project', id: any, label: string } | null, tags?: Array<{ __typename?: 'Tag', id: any, label: string }> | null } | null };

export type FindTodosByListQueryVariables = Exact<{
  listLabel: Scalars['String'];
}>;


export type FindTodosByListQuery = { __typename?: 'Query', findTodosByList: Array<{ __typename?: 'Todo', id: any, label: string, completed: boolean, priority?: Priority | null, description?: string | null, dueDate?: any | null, startDate?: any | null, endDate?: any | null, createdAt: any, updatedAt: any, list?: { __typename?: 'List', id: any, label: string } | null, project?: { __typename?: 'Project', id: any, label: string } | null, tags?: Array<{ __typename?: 'Tag', id: any, label: string }> | null }> };

export type FindTodosByProjectQueryVariables = Exact<{
  projectLabel: Scalars['String'];
}>;


export type FindTodosByProjectQuery = { __typename?: 'Query', findTodosByProject: Array<{ __typename?: 'Todo', id: any, label: string, completed: boolean, priority?: Priority | null, description?: string | null, dueDate?: any | null, startDate?: any | null, endDate?: any | null, createdAt: any, updatedAt: any, list?: { __typename?: 'List', id: any, label: string } | null, project?: { __typename?: 'Project', id: any, label: string } | null, tags?: Array<{ __typename?: 'Tag', id: any, label: string }> | null }> };

export type FindTodosByTagsQueryVariables = Exact<{
  tagLabels: Array<Scalars['String']> | Scalars['String'];
}>;


export type FindTodosByTagsQuery = { __typename?: 'Query', findTodosByTags: Array<{ __typename?: 'Todo', id: any, label: string, completed: boolean, priority?: Priority | null, description?: string | null, dueDate?: any | null, startDate?: any | null, endDate?: any | null, createdAt: any, updatedAt: any, list?: { __typename?: 'List', id: any, label: string } | null, project?: { __typename?: 'Project', id: any, label: string } | null, tags?: Array<{ __typename?: 'Tag', id: any, label: string }> | null }> };

export const ListFragmentFragmentDoc = `
    fragment ListFragment on List {
  id
  label
}
    `;
export const ProjectFragmentFragmentDoc = `
    fragment ProjectFragment on Project {
  id
  label
}
    `;
export const TagFragmentFragmentDoc = `
    fragment TagFragment on Tag {
  id
  label
}
    `;
export const TodoFragmentFragmentDoc = `
    fragment TodoFragment on Todo {
  id
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
  description
  dueDate
  startDate
  endDate
  createdAt
  updatedAt
}
    ${ListFragmentFragmentDoc}
${ProjectFragmentFragmentDoc}
${TagFragmentFragmentDoc}`;
export const CreateHomeTodoDocument = `
    mutation createHomeTodo($data: CreateHomeTodoInput!) {
  createHomeTodo(data: $data) {
    ...TodoFragment
  }
}
    ${TodoFragmentFragmentDoc}`;
export const useCreateHomeTodoMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<CreateHomeTodoMutation, TError, CreateHomeTodoMutationVariables, TContext>
    ) =>
    useMutation<CreateHomeTodoMutation, TError, CreateHomeTodoMutationVariables, TContext>(
      ['createHomeTodo'],
      (variables?: CreateHomeTodoMutationVariables) => fetcher<CreateHomeTodoMutation, CreateHomeTodoMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, CreateHomeTodoDocument, variables)(),
      options
    );
export const CreateListDocument = `
    mutation createList($data: CreateListInput!) {
  createList(data: $data) {
    ...ListFragment
  }
}
    ${ListFragmentFragmentDoc}`;
export const useCreateListMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<CreateListMutation, TError, CreateListMutationVariables, TContext>
    ) =>
    useMutation<CreateListMutation, TError, CreateListMutationVariables, TContext>(
      ['createList'],
      (variables?: CreateListMutationVariables) => fetcher<CreateListMutation, CreateListMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, CreateListDocument, variables)(),
      options
    );
export const CreateProjectDocument = `
    mutation createProject($data: CreateProjectInput!) {
  createProject(data: $data) {
    ...ProjectFragment
  }
}
    ${ProjectFragmentFragmentDoc}`;
export const useCreateProjectMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<CreateProjectMutation, TError, CreateProjectMutationVariables, TContext>
    ) =>
    useMutation<CreateProjectMutation, TError, CreateProjectMutationVariables, TContext>(
      ['createProject'],
      (variables?: CreateProjectMutationVariables) => fetcher<CreateProjectMutation, CreateProjectMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, CreateProjectDocument, variables)(),
      options
    );
export const CreateTagDocument = `
    mutation createTag($data: CreateTagInput!) {
  createTag(data: $data) {
    ...TagFragment
  }
}
    ${TagFragmentFragmentDoc}`;
export const useCreateTagMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<CreateTagMutation, TError, CreateTagMutationVariables, TContext>
    ) =>
    useMutation<CreateTagMutation, TError, CreateTagMutationVariables, TContext>(
      ['createTag'],
      (variables?: CreateTagMutationVariables) => fetcher<CreateTagMutation, CreateTagMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, CreateTagDocument, variables)(),
      options
    );
export const CreateTodoDocument = `
    mutation createTodo($data: CreateTodoInput!) {
  createTodo(data: $data) {
    ...TodoFragment
  }
}
    ${TodoFragmentFragmentDoc}`;
export const useCreateTodoMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<CreateTodoMutation, TError, CreateTodoMutationVariables, TContext>
    ) =>
    useMutation<CreateTodoMutation, TError, CreateTodoMutationVariables, TContext>(
      ['createTodo'],
      (variables?: CreateTodoMutationVariables) => fetcher<CreateTodoMutation, CreateTodoMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, CreateTodoDocument, variables)(),
      options
    );
export const RemoveListDocument = `
    mutation removeList($id: BigInt!) {
  removeList(id: $id) {
    id
  }
}
    `;
export const useRemoveListMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<RemoveListMutation, TError, RemoveListMutationVariables, TContext>
    ) =>
    useMutation<RemoveListMutation, TError, RemoveListMutationVariables, TContext>(
      ['removeList'],
      (variables?: RemoveListMutationVariables) => fetcher<RemoveListMutation, RemoveListMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, RemoveListDocument, variables)(),
      options
    );
export const RemoveProjectDocument = `
    mutation removeProject($id: BigInt!) {
  removeProject(id: $id) {
    id
  }
}
    `;
export const useRemoveProjectMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<RemoveProjectMutation, TError, RemoveProjectMutationVariables, TContext>
    ) =>
    useMutation<RemoveProjectMutation, TError, RemoveProjectMutationVariables, TContext>(
      ['removeProject'],
      (variables?: RemoveProjectMutationVariables) => fetcher<RemoveProjectMutation, RemoveProjectMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, RemoveProjectDocument, variables)(),
      options
    );
export const RemoveTagDocument = `
    mutation removeTag($id: BigInt!) {
  removeTag(id: $id) {
    id
  }
}
    `;
export const useRemoveTagMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<RemoveTagMutation, TError, RemoveTagMutationVariables, TContext>
    ) =>
    useMutation<RemoveTagMutation, TError, RemoveTagMutationVariables, TContext>(
      ['removeTag'],
      (variables?: RemoveTagMutationVariables) => fetcher<RemoveTagMutation, RemoveTagMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, RemoveTagDocument, variables)(),
      options
    );
export const RemoveTodoDocument = `
    mutation removeTodo($id: BigInt!) {
  removeTodo(id: $id) {
    id
  }
}
    `;
export const useRemoveTodoMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<RemoveTodoMutation, TError, RemoveTodoMutationVariables, TContext>
    ) =>
    useMutation<RemoveTodoMutation, TError, RemoveTodoMutationVariables, TContext>(
      ['removeTodo'],
      (variables?: RemoveTodoMutationVariables) => fetcher<RemoveTodoMutation, RemoveTodoMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, RemoveTodoDocument, variables)(),
      options
    );
export const UpdateListDocument = `
    mutation updateList($id: BigInt!, $data: UpdateListInput!) {
  updateList(id: $id, data: $data) {
    ...ListFragment
  }
}
    ${ListFragmentFragmentDoc}`;
export const useUpdateListMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<UpdateListMutation, TError, UpdateListMutationVariables, TContext>
    ) =>
    useMutation<UpdateListMutation, TError, UpdateListMutationVariables, TContext>(
      ['updateList'],
      (variables?: UpdateListMutationVariables) => fetcher<UpdateListMutation, UpdateListMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, UpdateListDocument, variables)(),
      options
    );
export const UpdateProjectDocument = `
    mutation updateProject($id: BigInt!, $data: UpdateProjectInput!) {
  updateProject(id: $id, data: $data) {
    ...ProjectFragment
  }
}
    ${ProjectFragmentFragmentDoc}`;
export const useUpdateProjectMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<UpdateProjectMutation, TError, UpdateProjectMutationVariables, TContext>
    ) =>
    useMutation<UpdateProjectMutation, TError, UpdateProjectMutationVariables, TContext>(
      ['updateProject'],
      (variables?: UpdateProjectMutationVariables) => fetcher<UpdateProjectMutation, UpdateProjectMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, UpdateProjectDocument, variables)(),
      options
    );
export const UpdateTagDocument = `
    mutation updateTag($id: BigInt!, $data: UpdateTagInput!) {
  updateTag(id: $id, data: $data) {
    ...TagFragment
  }
}
    ${TagFragmentFragmentDoc}`;
export const useUpdateTagMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<UpdateTagMutation, TError, UpdateTagMutationVariables, TContext>
    ) =>
    useMutation<UpdateTagMutation, TError, UpdateTagMutationVariables, TContext>(
      ['updateTag'],
      (variables?: UpdateTagMutationVariables) => fetcher<UpdateTagMutation, UpdateTagMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, UpdateTagDocument, variables)(),
      options
    );
export const UpdateTodoDocument = `
    mutation updateTodo($id: BigInt!, $data: UpdateTodoInput!) {
  updateTodo(id: $id, data: $data) {
    ...TodoFragment
  }
}
    ${TodoFragmentFragmentDoc}`;
export const useUpdateTodoMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<UpdateTodoMutation, TError, UpdateTodoMutationVariables, TContext>
    ) =>
    useMutation<UpdateTodoMutation, TError, UpdateTodoMutationVariables, TContext>(
      ['updateTodo'],
      (variables?: UpdateTodoMutationVariables) => fetcher<UpdateTodoMutation, UpdateTodoMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, UpdateTodoDocument, variables)(),
      options
    );
export const FindAllListsDocument = `
    query findAllLists {
  findAllLists {
    ...ListFragment
  }
}
    ${ListFragmentFragmentDoc}`;
export const useFindAllListsQuery = <
      TData = FindAllListsQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: FindAllListsQueryVariables,
      options?: UseQueryOptions<FindAllListsQuery, TError, TData>
    ) =>
    useQuery<FindAllListsQuery, TError, TData>(
      variables === undefined ? ['findAllLists'] : ['findAllLists', variables],
      fetcher<FindAllListsQuery, FindAllListsQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, FindAllListsDocument, variables),
      options
    );
export const FindAllProjectsDocument = `
    query findAllProjects {
  findAllProjects {
    ...ProjectFragment
  }
}
    ${ProjectFragmentFragmentDoc}`;
export const useFindAllProjectsQuery = <
      TData = FindAllProjectsQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: FindAllProjectsQueryVariables,
      options?: UseQueryOptions<FindAllProjectsQuery, TError, TData>
    ) =>
    useQuery<FindAllProjectsQuery, TError, TData>(
      variables === undefined ? ['findAllProjects'] : ['findAllProjects', variables],
      fetcher<FindAllProjectsQuery, FindAllProjectsQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, FindAllProjectsDocument, variables),
      options
    );
export const FindAllTagsDocument = `
    query findAllTags {
  findAllTags {
    ...TagFragment
  }
}
    ${TagFragmentFragmentDoc}`;
export const useFindAllTagsQuery = <
      TData = FindAllTagsQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: FindAllTagsQueryVariables,
      options?: UseQueryOptions<FindAllTagsQuery, TError, TData>
    ) =>
    useQuery<FindAllTagsQuery, TError, TData>(
      variables === undefined ? ['findAllTags'] : ['findAllTags', variables],
      fetcher<FindAllTagsQuery, FindAllTagsQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, FindAllTagsDocument, variables),
      options
    );
export const FindAllTodosDocument = `
    query findAllTodos {
  findAllTodos {
    ...TodoFragment
  }
}
    ${TodoFragmentFragmentDoc}`;
export const useFindAllTodosQuery = <
      TData = FindAllTodosQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: FindAllTodosQueryVariables,
      options?: UseQueryOptions<FindAllTodosQuery, TError, TData>
    ) =>
    useQuery<FindAllTodosQuery, TError, TData>(
      variables === undefined ? ['findAllTodos'] : ['findAllTodos', variables],
      fetcher<FindAllTodosQuery, FindAllTodosQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, FindAllTodosDocument, variables),
      options
    );
export const FindListByIdDocument = `
    query findListById($id: BigInt!) {
  findListById(id: $id) {
    ...ListFragment
  }
}
    ${ListFragmentFragmentDoc}`;
export const useFindListByIdQuery = <
      TData = FindListByIdQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: FindListByIdQueryVariables,
      options?: UseQueryOptions<FindListByIdQuery, TError, TData>
    ) =>
    useQuery<FindListByIdQuery, TError, TData>(
      ['findListById', variables],
      fetcher<FindListByIdQuery, FindListByIdQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, FindListByIdDocument, variables),
      options
    );
export const FindListByLabelDocument = `
    query findListByLabel($label: String!) {
  findListByLabel(label: $label) {
    ...ListFragment
  }
}
    ${ListFragmentFragmentDoc}`;
export const useFindListByLabelQuery = <
      TData = FindListByLabelQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: FindListByLabelQueryVariables,
      options?: UseQueryOptions<FindListByLabelQuery, TError, TData>
    ) =>
    useQuery<FindListByLabelQuery, TError, TData>(
      ['findListByLabel', variables],
      fetcher<FindListByLabelQuery, FindListByLabelQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, FindListByLabelDocument, variables),
      options
    );
export const FindProjectByIdDocument = `
    query findProjectById($id: BigInt!) {
  findProjectById(id: $id) {
    ...ProjectFragment
  }
}
    ${ProjectFragmentFragmentDoc}`;
export const useFindProjectByIdQuery = <
      TData = FindProjectByIdQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: FindProjectByIdQueryVariables,
      options?: UseQueryOptions<FindProjectByIdQuery, TError, TData>
    ) =>
    useQuery<FindProjectByIdQuery, TError, TData>(
      ['findProjectById', variables],
      fetcher<FindProjectByIdQuery, FindProjectByIdQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, FindProjectByIdDocument, variables),
      options
    );
export const FindProjectByLabelDocument = `
    query findProjectByLabel($label: String!) {
  findProjectByLabel(label: $label) {
    ...ProjectFragment
  }
}
    ${ProjectFragmentFragmentDoc}`;
export const useFindProjectByLabelQuery = <
      TData = FindProjectByLabelQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: FindProjectByLabelQueryVariables,
      options?: UseQueryOptions<FindProjectByLabelQuery, TError, TData>
    ) =>
    useQuery<FindProjectByLabelQuery, TError, TData>(
      ['findProjectByLabel', variables],
      fetcher<FindProjectByLabelQuery, FindProjectByLabelQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, FindProjectByLabelDocument, variables),
      options
    );
export const FindTagByIdDocument = `
    query findTagById($id: BigInt!) {
  findTagById(id: $id) {
    ...TagFragment
  }
}
    ${TagFragmentFragmentDoc}`;
export const useFindTagByIdQuery = <
      TData = FindTagByIdQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: FindTagByIdQueryVariables,
      options?: UseQueryOptions<FindTagByIdQuery, TError, TData>
    ) =>
    useQuery<FindTagByIdQuery, TError, TData>(
      ['findTagById', variables],
      fetcher<FindTagByIdQuery, FindTagByIdQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, FindTagByIdDocument, variables),
      options
    );
export const FindTagByLabelDocument = `
    query findTagByLabel($label: String!) {
  findTagByLabel(label: $label) {
    ...TagFragment
  }
}
    ${TagFragmentFragmentDoc}`;
export const useFindTagByLabelQuery = <
      TData = FindTagByLabelQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: FindTagByLabelQueryVariables,
      options?: UseQueryOptions<FindTagByLabelQuery, TError, TData>
    ) =>
    useQuery<FindTagByLabelQuery, TError, TData>(
      ['findTagByLabel', variables],
      fetcher<FindTagByLabelQuery, FindTagByLabelQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, FindTagByLabelDocument, variables),
      options
    );
export const FindTodoByIdDocument = `
    query findTodoById($id: BigInt!) {
  findTodoById(id: $id) {
    ...TodoFragment
  }
}
    ${TodoFragmentFragmentDoc}`;
export const useFindTodoByIdQuery = <
      TData = FindTodoByIdQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: FindTodoByIdQueryVariables,
      options?: UseQueryOptions<FindTodoByIdQuery, TError, TData>
    ) =>
    useQuery<FindTodoByIdQuery, TError, TData>(
      ['findTodoById', variables],
      fetcher<FindTodoByIdQuery, FindTodoByIdQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, FindTodoByIdDocument, variables),
      options
    );
export const FindTodoByLabelDocument = `
    query findTodoByLabel($label: String!) {
  findTodoByLabel(label: $label) {
    ...TodoFragment
  }
}
    ${TodoFragmentFragmentDoc}`;
export const useFindTodoByLabelQuery = <
      TData = FindTodoByLabelQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: FindTodoByLabelQueryVariables,
      options?: UseQueryOptions<FindTodoByLabelQuery, TError, TData>
    ) =>
    useQuery<FindTodoByLabelQuery, TError, TData>(
      ['findTodoByLabel', variables],
      fetcher<FindTodoByLabelQuery, FindTodoByLabelQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, FindTodoByLabelDocument, variables),
      options
    );
export const FindTodosByListDocument = `
    query findTodosByList($listLabel: String!) {
  findTodosByList(listLabel: $listLabel) {
    ...TodoFragment
  }
}
    ${TodoFragmentFragmentDoc}`;
export const useFindTodosByListQuery = <
      TData = FindTodosByListQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: FindTodosByListQueryVariables,
      options?: UseQueryOptions<FindTodosByListQuery, TError, TData>
    ) =>
    useQuery<FindTodosByListQuery, TError, TData>(
      ['findTodosByList', variables],
      fetcher<FindTodosByListQuery, FindTodosByListQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, FindTodosByListDocument, variables),
      options
    );
export const FindTodosByProjectDocument = `
    query findTodosByProject($projectLabel: String!) {
  findTodosByProject(projectLabel: $projectLabel) {
    ...TodoFragment
  }
}
    ${TodoFragmentFragmentDoc}`;
export const useFindTodosByProjectQuery = <
      TData = FindTodosByProjectQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: FindTodosByProjectQueryVariables,
      options?: UseQueryOptions<FindTodosByProjectQuery, TError, TData>
    ) =>
    useQuery<FindTodosByProjectQuery, TError, TData>(
      ['findTodosByProject', variables],
      fetcher<FindTodosByProjectQuery, FindTodosByProjectQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, FindTodosByProjectDocument, variables),
      options
    );
export const FindTodosByTagsDocument = `
    query findTodosByTags($tagLabels: [String!]!) {
  findTodosByTags(tagLabels: $tagLabels) {
    ...TodoFragment
  }
}
    ${TodoFragmentFragmentDoc}`;
export const useFindTodosByTagsQuery = <
      TData = FindTodosByTagsQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: FindTodosByTagsQueryVariables,
      options?: UseQueryOptions<FindTodosByTagsQuery, TError, TData>
    ) =>
    useQuery<FindTodosByTagsQuery, TError, TData>(
      ['findTodosByTags', variables],
      fetcher<FindTodosByTagsQuery, FindTodosByTagsQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, FindTodosByTagsDocument, variables),
      options
    );