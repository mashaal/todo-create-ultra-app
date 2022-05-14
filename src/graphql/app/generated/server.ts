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
  Priority: Priority;
  Project: ResolverTypeWrapper<Project>;
  Query: ResolverTypeWrapper<{}>;
  Repeat: ResolverTypeWrapper<Repeat>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Tag: ResolverTypeWrapper<Tag>;
  Todo: ResolverTypeWrapper<Todo>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Date: Scalars['Date'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  List: List;
  Project: Project;
  Query: {};
  Repeat: Repeat;
  String: Scalars['String'];
  Tag: Tag;
  Todo: Todo;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type ListResolvers<ContextType = any, ParentType extends ResolversParentTypes['List'] = ResolversParentTypes['List']> = {
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  todos?: Resolver<Array<ResolversTypes['Todo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  todos?: Resolver<Array<ResolversTypes['Todo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  findAllLists?: Resolver<Array<ResolversTypes['List']>, ParentType, ContextType>;
  findAllProjects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType>;
  findAllTags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType>;
  findAllTodos?: Resolver<Array<ResolversTypes['Todo']>, ParentType, ContextType>;
  findListById?: Resolver<Maybe<ResolversTypes['List']>, ParentType, ContextType, RequireFields<QueryFindListByIdArgs, 'id'>>;
  findListByLabel?: Resolver<Maybe<ResolversTypes['List']>, ParentType, ContextType, RequireFields<QueryFindListByLabelArgs, 'label'>>;
  findProjectById?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryFindProjectByIdArgs, 'id'>>;
  findProjectByLabel?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryFindProjectByLabelArgs, 'label'>>;
  findTagById?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<QueryFindTagByIdArgs, 'id'>>;
  findTagByLabel?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<QueryFindTagByLabelArgs, 'label'>>;
  findTodoById?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<QueryFindTodoByIdArgs, 'id'>>;
  findTodoByLabel?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<QueryFindTodoByLabelArgs, 'label'>>;
  findTodosByList?: Resolver<Array<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<QueryFindTodosByListArgs, 'listLabel'>>;
  findTodosByProject?: Resolver<Array<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<QueryFindTodosByProjectArgs, 'projectLabel'>>;
  findTodosByTags?: Resolver<Array<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<QueryFindTodosByTagsArgs, 'tagLabels'>>;
};

export type RepeatResolvers<ContextType = any, ParentType extends ResolversParentTypes['Repeat'] = ResolversParentTypes['Repeat']> = {
  frequency?: Resolver<ResolversTypes['Frequency'], ParentType, ContextType>;
  interval?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = {
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  todos?: Resolver<Array<ResolversTypes['Todo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  completed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dueDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  list?: Resolver<Maybe<ResolversTypes['List']>, ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['Priority']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>;
  repeat?: Resolver<Maybe<ResolversTypes['Repeat']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  List?: ListResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Repeat?: RepeatResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  Todo?: TodoResolvers<ContextType>;
};

