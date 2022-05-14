import { ColumnType, Generated } from 'kysely';

export type Timestamped<T> = T & {
  createdAt: ColumnType<Date, Date | undefined, never>;
  updatedAt: ColumnType<Date, Date | undefined, never>;
};

export type ListTable = Timestamped<{
  id: Generated<number>;
  label: string;
}>;

export type ProjectTable = Timestamped<{
  id: Generated<number>;
  label: string;
}>;

export type TagTable = Timestamped<{
  id: Generated<number>;
  label: string;
}>;

export type TodoTable = Timestamped<{
  id: Generated<number>;
  label: string;
  completed: boolean;
  listId: Generated<number> | null;
  projectId: Generated<number> | null;
  tags: Generated<number>[] | null;
  priority: string | null;
  description: string | null;
  dueDate: ColumnType<Date, Date | undefined, never> | null;
  startDate: ColumnType<Date, Date | undefined, never> | null;
  endDate: ColumnType<Date, Date | undefined, never> | null;
}>;

export interface Database {
  list: ListTable;
  project: ProjectTable;
  tag: TagTable;
  todo: TodoTable;
}
