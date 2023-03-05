import { Todo } from '../../domain/entity/Todo';
import { WithId } from './id';

export type TodoModel = {
  text: string;
};

export const todoEntityToModel = (entity: Todo): TodoModel => {
  return {
    text: entity.text,
  };
};

export const todoModelToEntity = (model: WithId<TodoModel>): Todo => {
  return new Todo({
    id: model.id,
    text: model.text,
  });
};

export const todoModelsToEntities = (models: WithId<TodoModel>[]): Todo[] => {
  return models.map((model) => {
    return todoModelToEntity(model);
  });
};
