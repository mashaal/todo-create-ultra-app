import ultra from 'https://deno.land/x/ultra@v1.0.1/server.ts';

const FAUNADB_KEY = Deno.env.get('FAUNADB_KEY');
if (!FAUNADB_KEY || FAUNADB_KEY.length === 0) {
  throw new Error('Environment variable FAUNADB_KEY is not set');
}

await ultra();
