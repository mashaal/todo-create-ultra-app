import { server } from '../graphql/app/server.ts';

export default async (request: Request) => {
  return await server({ ...request, request });
};
