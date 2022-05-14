import { Migrator } from 'kysely';
import { dirname, fromFileUrl, resolve } from 'std/path/mod.ts';

import { DenoFileMigrationProvider } from './DenoFileMigrationProvider.ts';
import { db } from './client.ts';

const migrationsPath = resolve(
  `${dirname(fromFileUrl(import.meta.url))}/migrations`,
);

async function migrateToLatest() {
  const migrationProvider = new DenoFileMigrationProvider(migrationsPath);

  const migrator = new Migrator({
    db,
    provider: migrationProvider,
  });

  const { error, results } = await migrator.migrateToLatest();

  if (error) {
    console.error('failed to migrate');
    console.error(error);
    return;
  }

  results?.forEach((it) => {
    if (it.status === 'Success') {
      console.log(`migration "${it.migrationName}" was executed successfully`);
    } else if (it.status === 'Error') {
      console.error(`failed to execute migration "${it.migrationName}"`);
    }
  });

  await db.destroy();
}

migrateToLatest();
