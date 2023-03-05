import { Todo } from '../../domain/entity/Todo';

export type TodoModel = {
  text: string;
};

export const todoEntityToModel = (entity: Todo): TodoModel => {
  return {
    text: entity.text,
  };
};
