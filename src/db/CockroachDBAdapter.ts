import { DialectAdapterBase } from 'kysely';

export class CockroachDBAdapter extends DialectAdapterBase {
  override get supportsTransactionalDdl(): boolean {
    return true;
  }

  override get supportsReturning(): boolean {
    return true;
  }

  override async acquireMigrationLock(): Promise<void> {
  }

  override async releaseMigrationLock(): Promise<void> {
  }
}
