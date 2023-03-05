import { Todo } from '../entity/Todo';

export interface TodoRepositoryInterface {
  create(todo: Todo): Promise<void>;
}
