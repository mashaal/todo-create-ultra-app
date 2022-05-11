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
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  Time: any;
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
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  label: Scalars['String'];
  todos: TodoPage;
};


export type ListTodosArgs = {
  _cursor?: InputMaybe<Scalars['String']>;
  _size?: InputMaybe<Scalars['Int']>;
};

/** 'List' input values */
export type ListInput = {
  label: Scalars['String'];
  todos?: InputMaybe<ListTodosRelation>;
};

/** The pagination object for elements of type 'List'. */
export type ListPage = {
  __typename?: 'ListPage';
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
  /** The elements of type 'List' in this page. */
  data: Array<Maybe<List>>;
};

/** Allow manipulating the relationship between the types 'List' and 'Todo'. */
export type ListTodosRelation = {
  /** Connect one or more documents of type 'Todo' with the current document using their IDs. */
  connect?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Create one or more documents of type 'Todo' and associate them with the current document. */
  create?: InputMaybe<Array<InputMaybe<TodoInput>>>;
  /** Disconnect the given documents of type 'Todo' from the current document using their IDs. */
  disconnect?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a new document in the collection of 'List' */
  createList: List;
  /** Create a new document in the collection of 'Project' */
  createProject: Project;
  /** Create a new document in the collection of 'Repeat' */
  createRepeat: Repeat;
  /** Create a new document in the collection of 'Tag' */
  createTag: Tag;
  /** Create a new document in the collection of 'Todo' */
  createTodo: Todo;
  /** Delete an existing document in the collection of 'List' */
  deleteList?: Maybe<List>;
  /** Delete an existing document in the collection of 'Project' */
  deleteProject?: Maybe<Project>;
  /** Delete an existing document in the collection of 'Repeat' */
  deleteRepeat?: Maybe<Repeat>;
  /** Delete an existing document in the collection of 'Tag' */
  deleteTag?: Maybe<Tag>;
  /** Delete an existing document in the collection of 'Todo' */
  deleteTodo?: Maybe<Todo>;
  /** Partially updates an existing document in the collection of 'List'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'. */
  partialUpdateList?: Maybe<List>;
  /** Partially updates an existing document in the collection of 'Project'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'. */
  partialUpdateProject?: Maybe<Project>;
  /** Partially updates an existing document in the collection of 'Repeat'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'. */
  partialUpdateRepeat?: Maybe<Repeat>;
  /** Partially updates an existing document in the collection of 'Tag'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'. */
  partialUpdateTag?: Maybe<Tag>;
  /** Partially updates an existing document in the collection of 'Todo'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'. */
  partialUpdateTodo?: Maybe<Todo>;
  /** Update an existing document in the collection of 'List' */
  updateList?: Maybe<List>;
  /** Update an existing document in the collection of 'Project' */
  updateProject?: Maybe<Project>;
  /** Update an existing document in the collection of 'Repeat' */
  updateRepeat?: Maybe<Repeat>;
  /** Update an existing document in the collection of 'Tag' */
  updateTag?: Maybe<Tag>;
  /** Update an existing document in the collection of 'Todo' */
  updateTodo?: Maybe<Todo>;
};


export type MutationCreateListArgs = {
  data: ListInput;
};


export type MutationCreateProjectArgs = {
  data: ProjectInput;
};


export type MutationCreateRepeatArgs = {
  data: RepeatInput;
};


export type MutationCreateTagArgs = {
  data: TagInput;
};


export type MutationCreateTodoArgs = {
  data: TodoInput;
};


export type MutationDeleteListArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRepeatArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID'];
};


export type MutationPartialUpdateListArgs = {
  data: PartialUpdateListInput;
  id: Scalars['ID'];
};


export type MutationPartialUpdateProjectArgs = {
  data: PartialUpdateProjectInput;
  id: Scalars['ID'];
};


export type MutationPartialUpdateRepeatArgs = {
  data: PartialUpdateRepeatInput;
  id: Scalars['ID'];
};


export type MutationPartialUpdateTagArgs = {
  data: PartialUpdateTagInput;
  id: Scalars['ID'];
};


export type MutationPartialUpdateTodoArgs = {
  data: PartialUpdateTodoInput;
  id: Scalars['ID'];
};


export type MutationUpdateListArgs = {
  data: ListInput;
  id: Scalars['ID'];
};


export type MutationUpdateProjectArgs = {
  data: ProjectInput;
  id: Scalars['ID'];
};


export type MutationUpdateRepeatArgs = {
  data: RepeatInput;
  id: Scalars['ID'];
};


export type MutationUpdateTagArgs = {
  data: TagInput;
  id: Scalars['ID'];
};


export type MutationUpdateTodoArgs = {
  data: TodoInput;
  id: Scalars['ID'];
};

/** 'List' input values */
export type PartialUpdateListInput = {
  label?: InputMaybe<Scalars['String']>;
  todos?: InputMaybe<ListTodosRelation>;
};

/** 'Project' input values */
export type PartialUpdateProjectInput = {
  label?: InputMaybe<Scalars['String']>;
  todos?: InputMaybe<ProjectTodosRelation>;
};

/** 'Repeat' input values */
export type PartialUpdateRepeatInput = {
  frequency?: InputMaybe<Frequency>;
  interval?: InputMaybe<Scalars['Int']>;
};

/** 'Tag' input values */
export type PartialUpdateTagInput = {
  label?: InputMaybe<Scalars['String']>;
  todos?: InputMaybe<TagTodosRelation>;
};

/** 'Todo' input values */
export type PartialUpdateTodoInput = {
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['Date']>;
  endDate?: InputMaybe<Scalars['Date']>;
  label?: InputMaybe<Scalars['String']>;
  list?: InputMaybe<TodoListRelation>;
  priority?: InputMaybe<Priority>;
  project?: InputMaybe<TodoProjectRelation>;
  repeat?: InputMaybe<TodoRepeatRelation>;
  startDate?: InputMaybe<Scalars['Date']>;
  tags?: InputMaybe<TodoTagsRelation>;
};

export enum Priority {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM',
  Urgent = 'URGENT'
}

export type Project = {
  __typename?: 'Project';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  label: Scalars['String'];
  todos: TodoPage;
};


export type ProjectTodosArgs = {
  _cursor?: InputMaybe<Scalars['String']>;
  _size?: InputMaybe<Scalars['Int']>;
};

/** 'Project' input values */
export type ProjectInput = {
  label: Scalars['String'];
  todos?: InputMaybe<ProjectTodosRelation>;
};

/** The pagination object for elements of type 'Project'. */
export type ProjectPage = {
  __typename?: 'ProjectPage';
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
  /** The elements of type 'Project' in this page. */
  data: Array<Maybe<Project>>;
};

/** Allow manipulating the relationship between the types 'Project' and 'Todo'. */
export type ProjectTodosRelation = {
  /** Connect one or more documents of type 'Todo' with the current document using their IDs. */
  connect?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Create one or more documents of type 'Todo' and associate them with the current document. */
  create?: InputMaybe<Array<InputMaybe<TodoInput>>>;
  /** Disconnect the given documents of type 'Todo' from the current document using their IDs. */
  disconnect?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type Query = {
  __typename?: 'Query';
  findAllLists: ListPage;
  findAllProjects: ProjectPage;
  findAllRepeats: RepeatPage;
  findAllTags: TagPage;
  findAllTodos: TodoPage;
  /** Find a document from the collection of 'List' by its id. */
  findListByID?: Maybe<List>;
  /** Find a document from the collection of 'Project' by its id. */
  findProjectByID?: Maybe<Project>;
  /** Find a document from the collection of 'Repeat' by its id. */
  findRepeatByID?: Maybe<Repeat>;
  /** Find a document from the collection of 'Tag' by its id. */
  findTagByID?: Maybe<Tag>;
  /** Find a document from the collection of 'Todo' by its id. */
  findTodoByID?: Maybe<Todo>;
};


export type QueryFindAllListsArgs = {
  _cursor?: InputMaybe<Scalars['String']>;
  _size?: InputMaybe<Scalars['Int']>;
};


export type QueryFindAllProjectsArgs = {
  _cursor?: InputMaybe<Scalars['String']>;
  _size?: InputMaybe<Scalars['Int']>;
};


export type QueryFindAllRepeatsArgs = {
  _cursor?: InputMaybe<Scalars['String']>;
  _size?: InputMaybe<Scalars['Int']>;
};


export type QueryFindAllTagsArgs = {
  _cursor?: InputMaybe<Scalars['String']>;
  _size?: InputMaybe<Scalars['Int']>;
};


export type QueryFindAllTodosArgs = {
  _cursor?: InputMaybe<Scalars['String']>;
  _size?: InputMaybe<Scalars['Int']>;
};


export type QueryFindListByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindProjectByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindRepeatByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindTagByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindTodoByIdArgs = {
  id: Scalars['ID'];
};

export type Repeat = {
  __typename?: 'Repeat';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  frequency: Frequency;
  interval: Scalars['Int'];
};

/** 'Repeat' input values */
export type RepeatInput = {
  frequency: Frequency;
  interval: Scalars['Int'];
};

/** The pagination object for elements of type 'Repeat'. */
export type RepeatPage = {
  __typename?: 'RepeatPage';
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
  /** The elements of type 'Repeat' in this page. */
  data: Array<Maybe<Repeat>>;
};

export type Tag = {
  __typename?: 'Tag';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  label: Scalars['String'];
  todos: TodoPage;
};


export type TagTodosArgs = {
  _cursor?: InputMaybe<Scalars['String']>;
  _size?: InputMaybe<Scalars['Int']>;
};

/** 'Tag' input values */
export type TagInput = {
  label: Scalars['String'];
  todos?: InputMaybe<TagTodosRelation>;
};

/** The pagination object for elements of type 'Tag'. */
export type TagPage = {
  __typename?: 'TagPage';
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
  /** The elements of type 'Tag' in this page. */
  data: Array<Maybe<Tag>>;
};

/** Allow manipulating the relationship between the types 'Tag' and 'Todo'. */
export type TagTodosRelation = {
  /** Connect one or more documents of type 'Todo' with the current document using their IDs. */
  connect?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Create one or more documents of type 'Todo' and associate them with the current document. */
  create?: InputMaybe<Array<InputMaybe<TodoInput>>>;
  /** Disconnect the given documents of type 'Todo' from the current document using their IDs. */
  disconnect?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type Todo = {
  __typename?: 'Todo';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  description?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  label: Scalars['String'];
  list?: Maybe<List>;
  priority?: Maybe<Priority>;
  project?: Maybe<Project>;
  repeat?: Maybe<Repeat>;
  startDate?: Maybe<Scalars['Date']>;
  tags: TagPage;
};


export type TodoTagsArgs = {
  _cursor?: InputMaybe<Scalars['String']>;
  _size?: InputMaybe<Scalars['Int']>;
};

/** 'Todo' input values */
export type TodoInput = {
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['Date']>;
  endDate?: InputMaybe<Scalars['Date']>;
  label: Scalars['String'];
  list?: InputMaybe<TodoListRelation>;
  priority?: InputMaybe<Priority>;
  project?: InputMaybe<TodoProjectRelation>;
  repeat?: InputMaybe<TodoRepeatRelation>;
  startDate?: InputMaybe<Scalars['Date']>;
  tags?: InputMaybe<TodoTagsRelation>;
};

/** Allow manipulating the relationship between the types 'Todo' and 'List' using the field 'Todo.list'. */
export type TodoListRelation = {
  /** Connect a document of type 'List' with the current document using its ID. */
  connect?: InputMaybe<Scalars['ID']>;
  /** Create a document of type 'List' and associate it with the current document. */
  create?: InputMaybe<ListInput>;
  /** If true, disconnects this document from 'List' */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** The pagination object for elements of type 'Todo'. */
export type TodoPage = {
  __typename?: 'TodoPage';
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
  /** The elements of type 'Todo' in this page. */
  data: Array<Maybe<Todo>>;
};

/** Allow manipulating the relationship between the types 'Todo' and 'Project' using the field 'Todo.project'. */
export type TodoProjectRelation = {
  /** Connect a document of type 'Project' with the current document using its ID. */
  connect?: InputMaybe<Scalars['ID']>;
  /** Create a document of type 'Project' and associate it with the current document. */
  create?: InputMaybe<ProjectInput>;
  /** If true, disconnects this document from 'Project' */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Allow manipulating the relationship between the types 'Todo' and 'Repeat' using the field 'Todo.repeat'. */
export type TodoRepeatRelation = {
  /** Connect a document of type 'Repeat' with the current document using its ID. */
  connect?: InputMaybe<Scalars['ID']>;
  /** Create a document of type 'Repeat' and associate it with the current document. */
  create?: InputMaybe<RepeatInput>;
  /** If true, disconnects this document from 'Repeat' */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Allow manipulating the relationship between the types 'Todo' and 'Tag'. */
export type TodoTagsRelation = {
  /** Connect one or more documents of type 'Tag' with the current document using their IDs. */
  connect?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Create one or more documents of type 'Tag' and associate them with the current document. */
  create?: InputMaybe<Array<InputMaybe<TagInput>>>;
  /** Disconnect the given documents of type 'Tag' from the current document using their IDs. */
  disconnect?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ListFragmentFragment = { __typename?: 'List', _id: string, label: string };

export type CreateListMutationVariables = Exact<{
  data: ListInput;
}>;


export type CreateListMutation = { __typename?: 'Mutation', createList: { __typename?: 'List', _id: string, label: string } };

export type DeleteListMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteListMutation = { __typename?: 'Mutation', deleteList?: { __typename?: 'List', _id: string, label: string } | null };

export type FindAllListsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllListsQuery = { __typename?: 'Query', findAllLists: { __typename?: 'ListPage', data: Array<{ __typename?: 'List', _id: string, label: string } | null> } };

export type FindListByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindListByIdQuery = { __typename?: 'Query', findListByID?: { __typename?: 'List', _id: string, label: string } | null };

export type PartialUpdateListMutationVariables = Exact<{
  id: Scalars['ID'];
  data: PartialUpdateListInput;
}>;


export type PartialUpdateListMutation = { __typename?: 'Mutation', partialUpdateList?: { __typename?: 'List', _id: string, label: string } | null };

export type UpdateListMutationVariables = Exact<{
  id: Scalars['ID'];
  data: ListInput;
}>;


export type UpdateListMutation = { __typename?: 'Mutation', updateList?: { __typename?: 'List', _id: string, label: string } | null };

export type ProjectFragmentFragment = { __typename?: 'Project', _id: string, label: string };

export type CreateProjectMutationVariables = Exact<{
  data: ProjectInput;
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject: { __typename?: 'Project', _id: string, label: string } };

export type DeleteProjectMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteProjectMutation = { __typename?: 'Mutation', deleteProject?: { __typename?: 'Project', _id: string, label: string } | null };

export type FindAllProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllProjectsQuery = { __typename?: 'Query', findAllProjects: { __typename?: 'ProjectPage', data: Array<{ __typename?: 'Project', _id: string, label: string } | null> } };

export type FindProjectByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindProjectByIdQuery = { __typename?: 'Query', findProjectByID?: { __typename?: 'Project', _id: string, label: string } | null };

export type PartialUpdateProjectMutationVariables = Exact<{
  id: Scalars['ID'];
  data: PartialUpdateProjectInput;
}>;


export type PartialUpdateProjectMutation = { __typename?: 'Mutation', partialUpdateProject?: { __typename?: 'Project', _id: string, label: string } | null };

export type UpdateProjectMutationVariables = Exact<{
  id: Scalars['ID'];
  data: ProjectInput;
}>;


export type UpdateProjectMutation = { __typename?: 'Mutation', updateProject?: { __typename?: 'Project', _id: string, label: string } | null };

export type RepeatFragmentFragment = { __typename?: 'Repeat', _id: string, frequency: Frequency, interval: number };

export type CreateRepeatMutationVariables = Exact<{
  data: RepeatInput;
}>;


export type CreateRepeatMutation = { __typename?: 'Mutation', createRepeat: { __typename?: 'Repeat', _id: string, frequency: Frequency, interval: number } };

export type DeleteRepeatMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteRepeatMutation = { __typename?: 'Mutation', deleteRepeat?: { __typename?: 'Repeat', _id: string, frequency: Frequency, interval: number } | null };

export type FindAllRepeatsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllRepeatsQuery = { __typename?: 'Query', findAllRepeats: { __typename?: 'RepeatPage', data: Array<{ __typename?: 'Repeat', _id: string, frequency: Frequency, interval: number } | null> } };

export type FindRepeatByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindRepeatByIdQuery = { __typename?: 'Query', findRepeatByID?: { __typename?: 'Repeat', _id: string, frequency: Frequency, interval: number } | null };

export type PartialUpdateRepeatMutationVariables = Exact<{
  id: Scalars['ID'];
  data: PartialUpdateRepeatInput;
}>;


export type PartialUpdateRepeatMutation = { __typename?: 'Mutation', partialUpdateRepeat?: { __typename?: 'Repeat', _id: string, frequency: Frequency, interval: number } | null };

export type UpdateRepeatMutationVariables = Exact<{
  id: Scalars['ID'];
  data: RepeatInput;
}>;


export type UpdateRepeatMutation = { __typename?: 'Mutation', updateRepeat?: { __typename?: 'Repeat', _id: string, frequency: Frequency, interval: number } | null };

export type TagFragmentFragment = { __typename?: 'Tag', _id: string, label: string };

export type CreateTagMutationVariables = Exact<{
  data: TagInput;
}>;


export type CreateTagMutation = { __typename?: 'Mutation', createTag: { __typename?: 'Tag', _id: string, label: string } };

export type DeleteTagMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteTagMutation = { __typename?: 'Mutation', deleteTag?: { __typename?: 'Tag', _id: string, label: string } | null };

export type FindAllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllTagsQuery = { __typename?: 'Query', findAllTags: { __typename?: 'TagPage', data: Array<{ __typename?: 'Tag', _id: string, label: string } | null> } };

export type FindTagByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindTagByIdQuery = { __typename?: 'Query', findTagByID?: { __typename?: 'Tag', _id: string, label: string } | null };

export type PartialUpdateTagMutationVariables = Exact<{
  id: Scalars['ID'];
  data: PartialUpdateTagInput;
}>;


export type PartialUpdateTagMutation = { __typename?: 'Mutation', partialUpdateTag?: { __typename?: 'Tag', _id: string, label: string } | null };

export type UpdateTagMutationVariables = Exact<{
  id: Scalars['ID'];
  data: TagInput;
}>;


export type UpdateTagMutation = { __typename?: 'Mutation', updateTag?: { __typename?: 'Tag', _id: string, label: string } | null };

export type TodoFragmentFragment = { __typename?: 'Todo', _id: string, label: string, dueDate?: any | null, startDate?: any | null, endDate?: any | null, project?: { __typename?: 'Project', _id: string, label: string } | null, tags: { __typename?: 'TagPage', data: Array<{ __typename?: 'Tag', _id: string, label: string } | null> }, repeat?: { __typename?: 'Repeat', _id: string, frequency: Frequency, interval: number } | null };

export type CreateTodoMutationVariables = Exact<{
  data: TodoInput;
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo: { __typename?: 'Todo', _id: string, label: string, dueDate?: any | null, startDate?: any | null, endDate?: any | null, project?: { __typename?: 'Project', _id: string, label: string } | null, tags: { __typename?: 'TagPage', data: Array<{ __typename?: 'Tag', _id: string, label: string } | null> }, repeat?: { __typename?: 'Repeat', _id: string, frequency: Frequency, interval: number } | null } };

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo?: { __typename?: 'Todo', _id: string, label: string, dueDate?: any | null, startDate?: any | null, endDate?: any | null, project?: { __typename?: 'Project', _id: string, label: string } | null, tags: { __typename?: 'TagPage', data: Array<{ __typename?: 'Tag', _id: string, label: string } | null> }, repeat?: { __typename?: 'Repeat', _id: string, frequency: Frequency, interval: number } | null } | null };

export type FindAllTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllTodosQuery = { __typename?: 'Query', findAllTodos: { __typename?: 'TodoPage', data: Array<{ __typename?: 'Todo', _id: string, label: string, dueDate?: any | null, startDate?: any | null, endDate?: any | null, project?: { __typename?: 'Project', _id: string, label: string } | null, tags: { __typename?: 'TagPage', data: Array<{ __typename?: 'Tag', _id: string, label: string } | null> }, repeat?: { __typename?: 'Repeat', _id: string, frequency: Frequency, interval: number } | null } | null> } };

export type FindTodoByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindTodoByIdQuery = { __typename?: 'Query', findTodoByID?: { __typename?: 'Todo', _id: string, label: string, dueDate?: any | null, startDate?: any | null, endDate?: any | null, project?: { __typename?: 'Project', _id: string, label: string } | null, tags: { __typename?: 'TagPage', data: Array<{ __typename?: 'Tag', _id: string, label: string } | null> }, repeat?: { __typename?: 'Repeat', _id: string, frequency: Frequency, interval: number } | null } | null };

export type PartialUpdateTodoMutationVariables = Exact<{
  id: Scalars['ID'];
  data: PartialUpdateTodoInput;
}>;


export type PartialUpdateTodoMutation = { __typename?: 'Mutation', partialUpdateTodo?: { __typename?: 'Todo', _id: string, label: string, dueDate?: any | null, startDate?: any | null, endDate?: any | null, project?: { __typename?: 'Project', _id: string, label: string } | null, tags: { __typename?: 'TagPage', data: Array<{ __typename?: 'Tag', _id: string, label: string } | null> }, repeat?: { __typename?: 'Repeat', _id: string, frequency: Frequency, interval: number } | null } | null };

export type UpdateTodoMutationVariables = Exact<{
  id: Scalars['ID'];
  data: TodoInput;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo?: { __typename?: 'Todo', _id: string, label: string, dueDate?: any | null, startDate?: any | null, endDate?: any | null, project?: { __typename?: 'Project', _id: string, label: string } | null, tags: { __typename?: 'TagPage', data: Array<{ __typename?: 'Tag', _id: string, label: string } | null> }, repeat?: { __typename?: 'Repeat', _id: string, frequency: Frequency, interval: number } | null } | null };

export const ListFragmentFragmentDoc = gql`
    fragment ListFragment on List {
  _id
  label
}
    `;
export const ProjectFragmentFragmentDoc = gql`
    fragment ProjectFragment on Project {
  _id
  label
}
    `;
export const TagFragmentFragmentDoc = gql`
    fragment TagFragment on Tag {
  _id
  label
}
    `;
export const RepeatFragmentFragmentDoc = gql`
    fragment RepeatFragment on Repeat {
  _id
  frequency
  interval
}
    `;
export const TodoFragmentFragmentDoc = gql`
    fragment TodoFragment on Todo {
  _id
  label
  project {
    ...ProjectFragment
  }
  tags {
    data {
      ...TagFragment
    }
  }
  repeat {
    ...RepeatFragment
  }
  dueDate
  startDate
  endDate
}
    ${ProjectFragmentFragmentDoc}
${TagFragmentFragmentDoc}
${RepeatFragmentFragmentDoc}`;
export const CreateListDocument = gql`
    mutation createList($data: ListInput!) {
  createList(data: $data) {
    ...ListFragment
  }
}
    ${ListFragmentFragmentDoc}`;
export const DeleteListDocument = gql`
    mutation deleteList($id: ID!) {
  deleteList(id: $id) {
    ...ListFragment
  }
}
    ${ListFragmentFragmentDoc}`;
export const FindAllListsDocument = gql`
    query findAllLists {
  findAllLists {
    data {
      ...ListFragment
    }
  }
}
    ${ListFragmentFragmentDoc}`;
export const FindListByIdDocument = gql`
    query findListByID($id: ID!) {
  findListByID(id: $id) {
    ...ListFragment
  }
}
    ${ListFragmentFragmentDoc}`;
export const PartialUpdateListDocument = gql`
    mutation partialUpdateList($id: ID!, $data: PartialUpdateListInput!) {
  partialUpdateList(id: $id, data: $data) {
    ...ListFragment
  }
}
    ${ListFragmentFragmentDoc}`;
export const UpdateListDocument = gql`
    mutation updateList($id: ID!, $data: ListInput!) {
  updateList(id: $id, data: $data) {
    ...ListFragment
  }
}
    ${ListFragmentFragmentDoc}`;
export const CreateProjectDocument = gql`
    mutation createProject($data: ProjectInput!) {
  createProject(data: $data) {
    ...ProjectFragment
  }
}
    ${ProjectFragmentFragmentDoc}`;
export const DeleteProjectDocument = gql`
    mutation deleteProject($id: ID!) {
  deleteProject(id: $id) {
    ...ProjectFragment
  }
}
    ${ProjectFragmentFragmentDoc}`;
export const FindAllProjectsDocument = gql`
    query findAllProjects {
  findAllProjects {
    data {
      ...ProjectFragment
    }
  }
}
    ${ProjectFragmentFragmentDoc}`;
export const FindProjectByIdDocument = gql`
    query findProjectByID($id: ID!) {
  findProjectByID(id: $id) {
    ...ProjectFragment
  }
}
    ${ProjectFragmentFragmentDoc}`;
export const PartialUpdateProjectDocument = gql`
    mutation partialUpdateProject($id: ID!, $data: PartialUpdateProjectInput!) {
  partialUpdateProject(id: $id, data: $data) {
    ...ProjectFragment
  }
}
    ${ProjectFragmentFragmentDoc}`;
export const UpdateProjectDocument = gql`
    mutation updateProject($id: ID!, $data: ProjectInput!) {
  updateProject(id: $id, data: $data) {
    ...ProjectFragment
  }
}
    ${ProjectFragmentFragmentDoc}`;
export const CreateRepeatDocument = gql`
    mutation createRepeat($data: RepeatInput!) {
  createRepeat(data: $data) {
    ...RepeatFragment
  }
}
    ${RepeatFragmentFragmentDoc}`;
export const DeleteRepeatDocument = gql`
    mutation deleteRepeat($id: ID!) {
  deleteRepeat(id: $id) {
    ...RepeatFragment
  }
}
    ${RepeatFragmentFragmentDoc}`;
export const FindAllRepeatsDocument = gql`
    query findAllRepeats {
  findAllRepeats {
    data {
      ...RepeatFragment
    }
  }
}
    ${RepeatFragmentFragmentDoc}`;
export const FindRepeatByIdDocument = gql`
    query findRepeatByID($id: ID!) {
  findRepeatByID(id: $id) {
    ...RepeatFragment
  }
}
    ${RepeatFragmentFragmentDoc}`;
export const PartialUpdateRepeatDocument = gql`
    mutation partialUpdateRepeat($id: ID!, $data: PartialUpdateRepeatInput!) {
  partialUpdateRepeat(id: $id, data: $data) {
    ...RepeatFragment
  }
}
    ${RepeatFragmentFragmentDoc}`;
export const UpdateRepeatDocument = gql`
    mutation updateRepeat($id: ID!, $data: RepeatInput!) {
  updateRepeat(id: $id, data: $data) {
    ...RepeatFragment
  }
}
    ${RepeatFragmentFragmentDoc}`;
export const CreateTagDocument = gql`
    mutation createTag($data: TagInput!) {
  createTag(data: $data) {
    ...TagFragment
  }
}
    ${TagFragmentFragmentDoc}`;
export const DeleteTagDocument = gql`
    mutation deleteTag($id: ID!) {
  deleteTag(id: $id) {
    ...TagFragment
  }
}
    ${TagFragmentFragmentDoc}`;
export const FindAllTagsDocument = gql`
    query findAllTags {
  findAllTags {
    data {
      ...TagFragment
    }
  }
}
    ${TagFragmentFragmentDoc}`;
export const FindTagByIdDocument = gql`
    query findTagByID($id: ID!) {
  findTagByID(id: $id) {
    ...TagFragment
  }
}
    ${TagFragmentFragmentDoc}`;
export const PartialUpdateTagDocument = gql`
    mutation partialUpdateTag($id: ID!, $data: PartialUpdateTagInput!) {
  partialUpdateTag(id: $id, data: $data) {
    ...TagFragment
  }
}
    ${TagFragmentFragmentDoc}`;
export const UpdateTagDocument = gql`
    mutation updateTag($id: ID!, $data: TagInput!) {
  updateTag(id: $id, data: $data) {
    ...TagFragment
  }
}
    ${TagFragmentFragmentDoc}`;
export const CreateTodoDocument = gql`
    mutation createTodo($data: TodoInput!) {
  createTodo(data: $data) {
    ...TodoFragment
  }
}
    ${TodoFragmentFragmentDoc}`;
export const DeleteTodoDocument = gql`
    mutation deleteTodo($id: ID!) {
  deleteTodo(id: $id) {
    ...TodoFragment
  }
}
    ${TodoFragmentFragmentDoc}`;
export const FindAllTodosDocument = gql`
    query findAllTodos {
  findAllTodos {
    data {
      ...TodoFragment
    }
  }
}
    ${TodoFragmentFragmentDoc}`;
export const FindTodoByIdDocument = gql`
    query findTodoByID($id: ID!) {
  findTodoByID(id: $id) {
    ...TodoFragment
  }
}
    ${TodoFragmentFragmentDoc}`;
export const PartialUpdateTodoDocument = gql`
    mutation partialUpdateTodo($id: ID!, $data: PartialUpdateTodoInput!) {
  partialUpdateTodo(id: $id, data: $data) {
    ...TodoFragment
  }
}
    ${TodoFragmentFragmentDoc}`;
export const UpdateTodoDocument = gql`
    mutation updateTodo($id: ID!, $data: TodoInput!) {
  updateTodo(id: $id, data: $data) {
    ...TodoFragment
  }
}
    ${TodoFragmentFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createList(variables: CreateListMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateListMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateListMutation>(CreateListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createList', 'mutation');
    },
    deleteList(variables: DeleteListMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteListMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteListMutation>(DeleteListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteList', 'mutation');
    },
    findAllLists(variables?: FindAllListsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindAllListsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindAllListsQuery>(FindAllListsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findAllLists', 'query');
    },
    findListByID(variables: FindListByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindListByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindListByIdQuery>(FindListByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findListByID', 'query');
    },
    partialUpdateList(variables: PartialUpdateListMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PartialUpdateListMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<PartialUpdateListMutation>(PartialUpdateListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'partialUpdateList', 'mutation');
    },
    updateList(variables: UpdateListMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateListMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateListMutation>(UpdateListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateList', 'mutation');
    },
    createProject(variables: CreateProjectMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateProjectMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateProjectMutation>(CreateProjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createProject', 'mutation');
    },
    deleteProject(variables: DeleteProjectMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteProjectMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteProjectMutation>(DeleteProjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteProject', 'mutation');
    },
    findAllProjects(variables?: FindAllProjectsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindAllProjectsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindAllProjectsQuery>(FindAllProjectsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findAllProjects', 'query');
    },
    findProjectByID(variables: FindProjectByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindProjectByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindProjectByIdQuery>(FindProjectByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findProjectByID', 'query');
    },
    partialUpdateProject(variables: PartialUpdateProjectMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PartialUpdateProjectMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<PartialUpdateProjectMutation>(PartialUpdateProjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'partialUpdateProject', 'mutation');
    },
    updateProject(variables: UpdateProjectMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateProjectMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateProjectMutation>(UpdateProjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateProject', 'mutation');
    },
    createRepeat(variables: CreateRepeatMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateRepeatMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateRepeatMutation>(CreateRepeatDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createRepeat', 'mutation');
    },
    deleteRepeat(variables: DeleteRepeatMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteRepeatMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteRepeatMutation>(DeleteRepeatDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteRepeat', 'mutation');
    },
    findAllRepeats(variables?: FindAllRepeatsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindAllRepeatsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindAllRepeatsQuery>(FindAllRepeatsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findAllRepeats', 'query');
    },
    findRepeatByID(variables: FindRepeatByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindRepeatByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindRepeatByIdQuery>(FindRepeatByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findRepeatByID', 'query');
    },
    partialUpdateRepeat(variables: PartialUpdateRepeatMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PartialUpdateRepeatMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<PartialUpdateRepeatMutation>(PartialUpdateRepeatDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'partialUpdateRepeat', 'mutation');
    },
    updateRepeat(variables: UpdateRepeatMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateRepeatMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateRepeatMutation>(UpdateRepeatDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateRepeat', 'mutation');
    },
    createTag(variables: CreateTagMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateTagMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateTagMutation>(CreateTagDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createTag', 'mutation');
    },
    deleteTag(variables: DeleteTagMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteTagMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteTagMutation>(DeleteTagDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteTag', 'mutation');
    },
    findAllTags(variables?: FindAllTagsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindAllTagsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindAllTagsQuery>(FindAllTagsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findAllTags', 'query');
    },
    findTagByID(variables: FindTagByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindTagByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindTagByIdQuery>(FindTagByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findTagByID', 'query');
    },
    partialUpdateTag(variables: PartialUpdateTagMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PartialUpdateTagMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<PartialUpdateTagMutation>(PartialUpdateTagDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'partialUpdateTag', 'mutation');
    },
    updateTag(variables: UpdateTagMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateTagMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateTagMutation>(UpdateTagDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateTag', 'mutation');
    },
    createTodo(variables: CreateTodoMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateTodoMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateTodoMutation>(CreateTodoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createTodo', 'mutation');
    },
    deleteTodo(variables: DeleteTodoMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteTodoMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteTodoMutation>(DeleteTodoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteTodo', 'mutation');
    },
    findAllTodos(variables?: FindAllTodosQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindAllTodosQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindAllTodosQuery>(FindAllTodosDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findAllTodos', 'query');
    },
    findTodoByID(variables: FindTodoByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindTodoByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindTodoByIdQuery>(FindTodoByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findTodoByID', 'query');
    },
    partialUpdateTodo(variables: PartialUpdateTodoMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PartialUpdateTodoMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<PartialUpdateTodoMutation>(PartialUpdateTodoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'partialUpdateTodo', 'mutation');
    },
    updateTodo(variables: UpdateTodoMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateTodoMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateTodoMutation>(UpdateTodoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateTodo', 'mutation');
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
    useFindListById(key: SWRKeyInterface, variables: FindListByIdQueryVariables, config?: SWRConfigInterface<FindListByIdQuery, ClientError>) {
      return useSWR<FindListByIdQuery, ClientError>(key, () => sdk.findListByID(variables), config);
    },
    useFindAllProjects(key: SWRKeyInterface, variables?: FindAllProjectsQueryVariables, config?: SWRConfigInterface<FindAllProjectsQuery, ClientError>) {
      return useSWR<FindAllProjectsQuery, ClientError>(key, () => sdk.findAllProjects(variables), config);
    },
    useFindProjectById(key: SWRKeyInterface, variables: FindProjectByIdQueryVariables, config?: SWRConfigInterface<FindProjectByIdQuery, ClientError>) {
      return useSWR<FindProjectByIdQuery, ClientError>(key, () => sdk.findProjectByID(variables), config);
    },
    useFindAllRepeats(key: SWRKeyInterface, variables?: FindAllRepeatsQueryVariables, config?: SWRConfigInterface<FindAllRepeatsQuery, ClientError>) {
      return useSWR<FindAllRepeatsQuery, ClientError>(key, () => sdk.findAllRepeats(variables), config);
    },
    useFindRepeatById(key: SWRKeyInterface, variables: FindRepeatByIdQueryVariables, config?: SWRConfigInterface<FindRepeatByIdQuery, ClientError>) {
      return useSWR<FindRepeatByIdQuery, ClientError>(key, () => sdk.findRepeatByID(variables), config);
    },
    useFindAllTags(key: SWRKeyInterface, variables?: FindAllTagsQueryVariables, config?: SWRConfigInterface<FindAllTagsQuery, ClientError>) {
      return useSWR<FindAllTagsQuery, ClientError>(key, () => sdk.findAllTags(variables), config);
    },
    useFindTagById(key: SWRKeyInterface, variables: FindTagByIdQueryVariables, config?: SWRConfigInterface<FindTagByIdQuery, ClientError>) {
      return useSWR<FindTagByIdQuery, ClientError>(key, () => sdk.findTagByID(variables), config);
    },
    useFindAllTodos(key: SWRKeyInterface, variables?: FindAllTodosQueryVariables, config?: SWRConfigInterface<FindAllTodosQuery, ClientError>) {
      return useSWR<FindAllTodosQuery, ClientError>(key, () => sdk.findAllTodos(variables), config);
    },
    useFindTodoById(key: SWRKeyInterface, variables: FindTodoByIdQueryVariables, config?: SWRConfigInterface<FindTodoByIdQuery, ClientError>) {
      return useSWR<FindTodoByIdQuery, ClientError>(key, () => sdk.findTodoByID(variables), config);
    }
  };
}
export type SdkWithHooks = ReturnType<typeof getSdkWithHooks>;