import { YogaInitialContext } from '@graphql-yoga/common';
import { createServer } from '@graphql-yoga/common';
import { dirname, fromFileUrl, resolve } from 'std/path/mod.ts';
import { gql } from 'graphql-tag';

import { Resolvers } from './generated/server.ts';
import { db } from '../../db/client.ts';

const schemaFilePath = resolve(
  `${dirname(fromFileUrl(import.meta.url))}/schema.graphql`,
);
const schemaFile = await Deno.readTextFile(schemaFilePath);

type Context = YogaInitialContext;

export const resolvers: Resolvers<Context> = {
  Query: {
    findAllLists: async (_parent, _args, _ctx, _info) => {
      try {
        console.log('findAllLists');

        const allLists = await db.selectFrom('list')
          .selectAll()
          .execute();

        console.log('findAllLists:allLists', allLists);

        return [];
      } catch (error: unknown) {
        console.error(error);
        throw error;
      }
    },

    findAllProjects: (_parent, _args, _ctx, _info) => {
      console.log('findAllProjects');

      return [];
    },

    findAllTags: (_parent, _args, _ctx, _info) => {
      console.log('findAllTags');

      return [];
    },

    findAllTodos: async (_parent, _args, _ctx, _info) => {
      try {
        console.log('findAllTodos');

        const client = createClient();

        const allTodos = await client.todo.findMany();

        console.log('allTodos', allTodos);

        // await client.$disconnect();

        return allTodos;
      } catch (error: unknown) {
        console.error(error);
      }
    },

    findListById: (_parent, _args, _ctx, _info) => {
      return null;
    },

    findListByLabel: (_parent, _args, _ctx, _info) => {
      return null;
    },

    findProjectById: (_parent, _args, _ctx, _info) => {
      return null;
    },

    findProjectByLabel: (_parent, _args, _ctx, _info) => {
      return null;
    },

    findTagById: (_parent, _args, _ctx, _info) => {
      return null;
    },

    findTagByLabel: (_parent, _args, _ctx, _info) => {
      return null;
    },

    findTodoById: (_parent, _args, _ctx, _info) => {
      return null;
    },

    findTodoByLabel: (_parent, _args, _ctx, _info) => {
      return null;
    },

    findTodosByList: (_parent, _args, _ctx, _info) => {
      return [];
    },

    findTodosByProject: (_parent, _args, _ctx, _info) => {
      return [];
    },

    findTodosByTags: (_parent, _args, _ctx, _info) => {
      return [];
    },
  },

  Mutation: {
    createList: (_parent, _args, _ctx, _info) => {
      return {
        id: '1',
        label: 'List',
        todos: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    },

    createProject: (_parent, _args, _ctx, _info) => {
      return {
        id: '1',
        label: 'List',
        todos: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    },

    createTag: (_parent, _args, _ctx, _info) => {
      return {
        id: '1',
        label: 'List',
        todos: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    },

    createTodo: (_parent, _args, _ctx, _info) => {
      return {
        id: '1',
        label: 'List',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    },

    removeList: (_parent, _args, _ctx, _info) => {
      return {
        id: '1',
        label: 'List',
        todos: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    },

    removeProject: (_parent, _args, _ctx, _info) => {
      return {
        id: '1',
        label: 'Project',
        todos: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    },

    removeTag: (_parent, _args, _ctx, _info) => {
      return {
        id: '1',
        label: 'Tag',
        todos: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    },

    removeTodo: (_parent, _args, _ctx, _info) => {
      return {
        id: '1',
        label: 'List',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    },

    updateList: (_parent, _args, _ctx, _info) => {
      return {
        id: '1',
        label: 'List',
        todos: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    },

    updateProject: (_parent, _args, _ctx, _info) => {
      return {
        id: '1',
        label: 'Project',
        todos: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    },

    updateTag: (_parent, _args, _ctx, _info) => {
      return {
        id: '1',
        label: 'Tag',
        todos: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    },

    updateTodo: (_parent, _args, _ctx, _info) => {
      return {
        id: '1',
        label: 'List',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    },
  },
};

export const server = createServer({
  schema: {
    typeDefs: gql(schemaFile),
    resolvers,
  },
});
