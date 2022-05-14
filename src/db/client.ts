import { CockroachDBAdapter } from './CockroachDBAdapter.ts';
import { Database } from './schema.ts';
import { Kysely, PostgresIntrospector, PostgresQueryCompiler } from 'kysely';
import { PostgreSQLDriver } from 'kysely_deno_postgres';

const DATABASE_URL = Deno.env.get('DATABASE_URL');
if (!DATABASE_URL) {
  throw new Error(`Environment variable '${DATABASE_URL}' is not set`);
}

export const db = new Kysely<Database>({
  dialect: {
    createAdapter() {
      return new CockroachDBAdapter();
    },
    createDriver() {
      return new PostgreSQLDriver({
        connectionString: DATABASE_URL,
      });
    },
    createIntrospector(db: Kysely<unknown>) {
      return new PostgresIntrospector(db);
    },
    createQueryCompiler() {
      return new PostgresQueryCompiler();
    },
  },
});
