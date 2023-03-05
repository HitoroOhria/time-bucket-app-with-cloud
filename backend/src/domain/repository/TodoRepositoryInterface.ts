import { Todo } from '../entity/Todo';

export interface TodoRepositoryInterface {
  create(todo: Todo): Promise<void>;

  update(todo: Todo): Promise<void>;

  getById(id: string): Promise<Todo | undefined>;

  getAll(): Promise<Todo[]>;

  delete(id: string): Promise<void>;
}
