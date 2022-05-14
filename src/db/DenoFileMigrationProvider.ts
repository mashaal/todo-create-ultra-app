import { Migration, MigrationProvider } from 'kysely';

export class DenoFileMigrationProvider implements MigrationProvider {
  readonly #migrationFolder: string;

  constructor(migrationFolder: string) {
    this.#migrationFolder = migrationFolder;
  }

  static isMigration(migration: { up: unknown }) {
    return migration && typeof migration === 'object' &&
      typeof migration.up === 'function';
  }

  async getMigrations(): Promise<Record<string, Migration>> {
    const migrations: Record<string, Migration> = {};

    for await (const entry of Deno.readDir(this.#migrationFolder)) {
      if (
        entry.isFile && entry.name.endsWith('.js') ||
        (entry.name.endsWith('.ts') && !entry.name.endsWith('.d.ts'))
      ) {
        const migration = await import(
          `${this.#migrationFolder}/${entry.name}`
        );

        if (DenoFileMigrationProvider.isMigration(migration)) {
          migrations[entry.name.substring(0, entry.name.length - 3)] =
            migration;
        }
      }
    }

    return migrations;
  }
}
