import { server } from '../graphql/server.ts';

export default async (request: Request) => {
  return await server({ ...request, request });
};
