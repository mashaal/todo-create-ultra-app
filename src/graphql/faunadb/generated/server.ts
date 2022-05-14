import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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
  findListByLabel?: Maybe<List>;
  /** Find a document from the collection of 'Project' by its id. */
  findProjectByID?: Maybe<Project>;
  findProjectByLabel?: Maybe<Project>;
  /** Find a document from the collection of 'Repeat' by its id. */
  findRepeatByID?: Maybe<Repeat>;
  /** Find a document from the collection of 'Tag' by its id. */
  findTagByID?: Maybe<Tag>;
  findTagByLabel?: Maybe<Tag>;
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


export type QueryFindListByLabelArgs = {
  label: Scalars['String'];
};


export type QueryFindProjectByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindProjectByLabelArgs = {
  label: Scalars['String'];
};


export type QueryFindRepeatByIdArgs = {
  id: Scalars['ID'];
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Frequency: Frequency;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  List: ResolverTypeWrapper<List>;
  ListInput: ListInput;
  ListPage: ResolverTypeWrapper<ListPage>;
  ListTodosRelation: ListTodosRelation;
  Long: ResolverTypeWrapper<Scalars['Long']>;
  Mutation: ResolverTypeWrapper<{}>;
  PartialUpdateListInput: PartialUpdateListInput;
  PartialUpdateProjectInput: PartialUpdateProjectInput;
  PartialUpdateRepeatInput: PartialUpdateRepeatInput;
  PartialUpdateTagInput: PartialUpdateTagInput;
  PartialUpdateTodoInput: PartialUpdateTodoInput;
  Priority: Priority;
  Project: ResolverTypeWrapper<Project>;
  ProjectInput: ProjectInput;
  ProjectPage: ResolverTypeWrapper<ProjectPage>;
  ProjectTodosRelation: ProjectTodosRelation;
  Query: ResolverTypeWrapper<{}>;
  Repeat: ResolverTypeWrapper<Repeat>;
  RepeatInput: RepeatInput;
  RepeatPage: ResolverTypeWrapper<RepeatPage>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Tag: ResolverTypeWrapper<Tag>;
  TagInput: TagInput;
  TagPage: ResolverTypeWrapper<TagPage>;
  TagTodosRelation: TagTodosRelation;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  Todo: ResolverTypeWrapper<Todo>;
  TodoInput: TodoInput;
  TodoListRelation: TodoListRelation;
  TodoPage: ResolverTypeWrapper<TodoPage>;
  TodoProjectRelation: TodoProjectRelation;
  TodoRepeatRelation: TodoRepeatRelation;
  TodoTagsRelation: TodoTagsRelation;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Date: Scalars['Date'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  List: List;
  ListInput: ListInput;
  ListPage: ListPage;
  ListTodosRelation: ListTodosRelation;
  Long: Scalars['Long'];
  Mutation: {};
  PartialUpdateListInput: PartialUpdateListInput;
  PartialUpdateProjectInput: PartialUpdateProjectInput;
  PartialUpdateRepeatInput: PartialUpdateRepeatInput;
  PartialUpdateTagInput: PartialUpdateTagInput;
  PartialUpdateTodoInput: PartialUpdateTodoInput;
  Project: Project;
  ProjectInput: ProjectInput;
  ProjectPage: ProjectPage;
  ProjectTodosRelation: ProjectTodosRelation;
  Query: {};
  Repeat: Repeat;
  RepeatInput: RepeatInput;
  RepeatPage: RepeatPage;
  String: Scalars['String'];
  Tag: Tag;
  TagInput: TagInput;
  TagPage: TagPage;
  TagTodosRelation: TagTodosRelation;
  Time: Scalars['Time'];
  Todo: Todo;
  TodoInput: TodoInput;
  TodoListRelation: TodoListRelation;
  TodoPage: TodoPage;
  TodoProjectRelation: TodoProjectRelation;
  TodoRepeatRelation: TodoRepeatRelation;
  TodoTagsRelation: TodoTagsRelation;
};

export type CollectionDirectiveArgs = {
  name: Scalars['String'];
};

export type CollectionDirectiveResolver<Result, Parent, ContextType = any, Args = CollectionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveArgs = { };

export type EmbeddedDirectiveResolver<Result, Parent, ContextType = any, Args = EmbeddedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IndexDirectiveArgs = {
  name: Scalars['String'];
};

export type IndexDirectiveResolver<Result, Parent, ContextType = any, Args = IndexDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type RelationDirectiveArgs = {
  name?: Maybe<Scalars['String']>;
};

export type RelationDirectiveResolver<Result, Parent, ContextType = any, Args = RelationDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ResolverDirectiveArgs = {
  name?: Maybe<Scalars['String']>;
  paginated?: Scalars['Boolean'];
};

export type ResolverDirectiveResolver<Result, Parent, ContextType = any, Args = ResolverDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type UniqueDirectiveArgs = {
  index?: Maybe<Scalars['String']>;
};

export type UniqueDirectiveResolver<Result, Parent, ContextType = any, Args = UniqueDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type ListResolvers<ContextType = any, ParentType extends ResolversParentTypes['List'] = ResolversParentTypes['List']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  _ts?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  todos?: Resolver<ResolversTypes['TodoPage'], ParentType, ContextType, Partial<ListTodosArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListPage'] = ResolversParentTypes['ListPage']> = {
  after?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  before?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data?: Resolver<Array<Maybe<ResolversTypes['List']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createList?: Resolver<ResolversTypes['List'], ParentType, ContextType, RequireFields<MutationCreateListArgs, 'data'>>;
  createProject?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationCreateProjectArgs, 'data'>>;
  createRepeat?: Resolver<ResolversTypes['Repeat'], ParentType, ContextType, RequireFields<MutationCreateRepeatArgs, 'data'>>;
  createTag?: Resolver<ResolversTypes['Tag'], ParentType, ContextType, RequireFields<MutationCreateTagArgs, 'data'>>;
  createTodo?: Resolver<ResolversTypes['Todo'], ParentType, ContextType, RequireFields<MutationCreateTodoArgs, 'data'>>;
  deleteList?: Resolver<Maybe<ResolversTypes['List']>, ParentType, ContextType, RequireFields<MutationDeleteListArgs, 'id'>>;
  deleteProject?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<MutationDeleteProjectArgs, 'id'>>;
  deleteRepeat?: Resolver<Maybe<ResolversTypes['Repeat']>, ParentType, ContextType, RequireFields<MutationDeleteRepeatArgs, 'id'>>;
  deleteTag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<MutationDeleteTagArgs, 'id'>>;
  deleteTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<MutationDeleteTodoArgs, 'id'>>;
  partialUpdateList?: Resolver<Maybe<ResolversTypes['List']>, ParentType, ContextType, RequireFields<MutationPartialUpdateListArgs, 'data' | 'id'>>;
  partialUpdateProject?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<MutationPartialUpdateProjectArgs, 'data' | 'id'>>;
  partialUpdateRepeat?: Resolver<Maybe<ResolversTypes['Repeat']>, ParentType, ContextType, RequireFields<MutationPartialUpdateRepeatArgs, 'data' | 'id'>>;
  partialUpdateTag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<MutationPartialUpdateTagArgs, 'data' | 'id'>>;
  partialUpdateTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<MutationPartialUpdateTodoArgs, 'data' | 'id'>>;
  updateList?: Resolver<Maybe<ResolversTypes['List']>, ParentType, ContextType, RequireFields<MutationUpdateListArgs, 'data' | 'id'>>;
  updateProject?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<MutationUpdateProjectArgs, 'data' | 'id'>>;
  updateRepeat?: Resolver<Maybe<ResolversTypes['Repeat']>, ParentType, ContextType, RequireFields<MutationUpdateRepeatArgs, 'data' | 'id'>>;
  updateTag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<MutationUpdateTagArgs, 'data' | 'id'>>;
  updateTodo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<MutationUpdateTodoArgs, 'data' | 'id'>>;
};

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  _ts?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  todos?: Resolver<ResolversTypes['TodoPage'], ParentType, ContextType, Partial<ProjectTodosArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectPage'] = ResolversParentTypes['ProjectPage']> = {
  after?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  before?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data?: Resolver<Array<Maybe<ResolversTypes['Project']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  findAllLists?: Resolver<ResolversTypes['ListPage'], ParentType, ContextType, Partial<QueryFindAllListsArgs>>;
  findAllProjects?: Resolver<ResolversTypes['ProjectPage'], ParentType, ContextType, Partial<QueryFindAllProjectsArgs>>;
  findAllRepeats?: Resolver<ResolversTypes['RepeatPage'], ParentType, ContextType, Partial<QueryFindAllRepeatsArgs>>;
  findAllTags?: Resolver<ResolversTypes['TagPage'], ParentType, ContextType, Partial<QueryFindAllTagsArgs>>;
  findAllTodos?: Resolver<ResolversTypes['TodoPage'], ParentType, ContextType, Partial<QueryFindAllTodosArgs>>;
  findListByID?: Resolver<Maybe<ResolversTypes['List']>, ParentType, ContextType, RequireFields<QueryFindListByIdArgs, 'id'>>;
  findListByLabel?: Resolver<Maybe<ResolversTypes['List']>, ParentType, ContextType, RequireFields<QueryFindListByLabelArgs, 'label'>>;
  findProjectByID?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryFindProjectByIdArgs, 'id'>>;
  findProjectByLabel?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryFindProjectByLabelArgs, 'label'>>;
  findRepeatByID?: Resolver<Maybe<ResolversTypes['Repeat']>, ParentType, ContextType, RequireFields<QueryFindRepeatByIdArgs, 'id'>>;
  findTagByID?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<QueryFindTagByIdArgs, 'id'>>;
  findTagByLabel?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<QueryFindTagByLabelArgs, 'label'>>;
  findTodoByID?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<QueryFindTodoByIdArgs, 'id'>>;
};

export type RepeatResolvers<ContextType = any, ParentType extends ResolversParentTypes['Repeat'] = ResolversParentTypes['Repeat']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  _ts?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  frequency?: Resolver<ResolversTypes['Frequency'], ParentType, ContextType>;
  interval?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RepeatPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['RepeatPage'] = ResolversParentTypes['RepeatPage']> = {
  after?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  before?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data?: Resolver<Array<Maybe<ResolversTypes['Repeat']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  _ts?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  todos?: Resolver<ResolversTypes['TodoPage'], ParentType, ContextType, Partial<TagTodosArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagPage'] = ResolversParentTypes['TagPage']> = {
  after?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  before?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data?: Resolver<Array<Maybe<ResolversTypes['Tag']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type TodoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  _ts?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dueDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  list?: Resolver<Maybe<ResolversTypes['List']>, ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['Priority']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>;
  repeat?: Resolver<Maybe<ResolversTypes['Repeat']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  tags?: Resolver<ResolversTypes['TagPage'], ParentType, ContextType, Partial<TodoTagsArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoPage'] = ResolversParentTypes['TodoPage']> = {
  after?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  before?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data?: Resolver<Array<Maybe<ResolversTypes['Todo']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  List?: ListResolvers<ContextType>;
  ListPage?: ListPageResolvers<ContextType>;
  Long?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  ProjectPage?: ProjectPageResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Repeat?: RepeatResolvers<ContextType>;
  RepeatPage?: RepeatPageResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  TagPage?: TagPageResolvers<ContextType>;
  Time?: GraphQLScalarType;
  Todo?: TodoResolvers<ContextType>;
  TodoPage?: TodoPageResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  collection?: CollectionDirectiveResolver<any, any, ContextType>;
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>;
  index?: IndexDirectiveResolver<any, any, ContextType>;
  relation?: RelationDirectiveResolver<any, any, ContextType>;
  resolver?: ResolverDirectiveResolver<any, any, ContextType>;
  unique?: UniqueDirectiveResolver<any, any, ContextType>;
};
