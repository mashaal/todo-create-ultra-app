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
  labels?: InputMaybe<TodoLabelsRelation>;
  list?: InputMaybe<TodoListRelation>;
  priority?: InputMaybe<Priority>;
  project?: InputMaybe<TodoProjectRelation>;
  repeat?: InputMaybe<TodoRepeatRelation>;
  startDate?: InputMaybe<Scalars['Date']>;
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
  labels: TagPage;
  list?: Maybe<List>;
  priority?: Maybe<Priority>;
  project?: Maybe<Project>;
  repeat?: Maybe<Repeat>;
  startDate?: Maybe<Scalars['Date']>;
};


export type TodoLabelsArgs = {
  _cursor?: InputMaybe<Scalars['String']>;
  _size?: InputMaybe<Scalars['Int']>;
};

/** 'Todo' input values */
export type TodoInput = {
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['Date']>;
  endDate?: InputMaybe<Scalars['Date']>;
  label: Scalars['String'];
  labels?: InputMaybe<TodoLabelsRelation>;
  list?: InputMaybe<TodoListRelation>;
  priority?: InputMaybe<Priority>;
  project?: InputMaybe<TodoProjectRelation>;
  repeat?: InputMaybe<TodoRepeatRelation>;
  startDate?: InputMaybe<Scalars['Date']>;
};

/** Allow manipulating the relationship between the types 'Todo' and 'Tag'. */
export type TodoLabelsRelation = {
  /** Connect one or more documents of type 'Tag' with the current document using their IDs. */
  connect?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Create one or more documents of type 'Tag' and associate them with the current document. */
  create?: InputMaybe<Array<InputMaybe<TagInput>>>;
  /** Disconnect the given documents of type 'Tag' from the current document using their IDs. */
  disconnect?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
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

export type FindAllListsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllListsQuery = { __typename?: 'Query', findAllLists: { __typename?: 'ListPage', data: Array<{ __typename?: 'List', _id: string, label: string } | null> } };


export const FindAllListsDocument = gql`
    query findAllLists {
  findAllLists {
    data {
      _id
      label
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    findAllLists(variables?: FindAllListsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindAllListsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindAllListsQuery>(FindAllListsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findAllLists', 'query');
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
    }
  };
}
export type SdkWithHooks = ReturnType<typeof getSdkWithHooks>;