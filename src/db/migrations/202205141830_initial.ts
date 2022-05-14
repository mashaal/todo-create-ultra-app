import { Kysely } from 'kysely';
import { Database } from '../schema.ts';

export async function up(db: Kysely<Database>): Promise<void> {
  try {
    await db.schema
      .createTable('list')
      .addColumn('id', 'serial', (col) => col.primaryKey())
      .addColumn('label', 'varchar', (col) => col.notNull())
      .execute();

    await db.schema
      .createTable('project')
      .addColumn('id', 'serial', (col) => col.primaryKey())
      .addColumn('label', 'varchar', (col) => col.notNull())
      .execute();

    await db.schema
      .createTable('tag')
      .addColumn('id', 'serial', (col) => col.primaryKey())
      .addColumn('label', 'varchar', (col) => col.notNull())
      .execute();

    await db.schema
      .createTable('todo')
      .addColumn('id', 'serial', (col) => col.primaryKey())
      .addColumn('label', 'varchar', (col) => col.notNull())
      .addColumn('completed', 'boolean', (col) => col.notNull())
      .addColumn(
        'listId',
        'integer',
        (col) => col.references('list.id').onDelete('restrict'),
      )
      .addColumn(
        'projectId',
        'integer',
        (col) => col.references('project.id').onDelete('restrict'),
      )
      .addColumn('priority', 'varchar')
      .addColumn('dueDate', 'date')
      .addColumn('startDate', 'date')
      .addColumn('endDate', 'date')
      .addColumn('createdAt', 'date')
      .addColumn('updatedAt', 'date')
      .execute();

    await db.schema
      .createTable('todo_tag')
      .addColumn('todoId', 'integer', (col) => col.references('todo.id'))
      .addColumn('tagId', 'integer', (col) => col.references('tag.id'))
      .addPrimaryKeyConstraint('id', ['todoId', 'tagId'])
      .execute();

    await db.schema
      .createIndex('todo_listId_index')
      .on('todo')
      .column('listId')
      .execute();

    await db.schema
      .createIndex('todo_projectId_index')
      .on('todo')
      .column('projectId')
      .execute();
  } catch (error: unknown) {
    console.error(error);
  }
}

export async function down(db: Kysely<Database>): Promise<void> {
  try {
    await db.schema.dropTable('list').execute();
    await db.schema.dropTable('project').execute();
    await db.schema.dropTable('tag').execute();
    await db.schema.dropTable('todo').execute();
    await db.schema.dropTable('todo_tag').execute();
    await db.schema.dropIndex('todo_listId_index').execute();
    await db.schema.dropIndex('todo_projectId_index').execute();
  } catch (error: unknown) {
    console.error(error);
  }
}
