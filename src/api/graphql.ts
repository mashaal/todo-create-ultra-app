const FAUNADB_KEY = Deno.env.get('FAUNADB_KEY');

export default async (request: Request) => {
  console.log(request.method, request.url);

  const response = await fetch('https://graphql.fauna.com/graphql', {
    body: request.body,
    cache: request.cache,
    credentials: request.credentials,
    headers: new Headers({
      ...request.headers,
      'Authorization': `Bearer ${FAUNADB_KEY}`,
    }),
    integrity: request.integrity,
    keepalive: request.keepalive,
    method: request.method,
    mode: request.mode,
    redirect: request.redirect,
    referrer: request.referrer,
    referrerPolicy: request.referrerPolicy,
    signal: request.signal,
  });

  return response;
};
