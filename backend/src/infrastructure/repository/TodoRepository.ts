import { CollectionReference, Firestore } from '@google-cloud/firestore';
import { Todo } from '../../domain/entity/Todo';
import { TodoRepositoryInterface } from '../../domain/repository/TodoRepositoryInterface';
import { collections } from '../firestore/firestore';
import { getModelsWithId, getModelWithId } from '../model/id';
import {
  todoEntityToModel,
  TodoModel,
  todoModelsToEntities,
  todoModelToEntity,
} from '../model/TodoModel';

export class TodoRepository implements TodoRepositoryInterface {
  private readonly collection: CollectionReference<TodoModel>;

  constructor(db: Firestore) {
    this.collection = collections(db).todo;
  }

  async create(todo: Todo): Promise<void> {
    const todoModel = todoEntityToModel(todo);

    await this.collection.doc(todo.id).create(todoModel);
  }

  async update(todo: Todo): Promise<void> {
    const todoModel = todoEntityToModel(todo);

    await this.collection.doc(todo.id).update(todoModel);
  }

  async getById(id: string): Promise<Todo | undefined> {
    const snap = await this.collection.doc(id).get();

    const todoModel = getModelWithId<TodoModel>(snap);
    if (todoModel === undefined) {
      return undefined;
    }

    return todoModelToEntity(todoModel);
  }

  async getAll(): Promise<Todo[]> {
    const snap = await this.collection.get();

    const todoModels = getModelsWithId<TodoModel>(snap);

    return todoModelsToEntities(todoModels);
  }

  async delete(id: string): Promise<void> {
    await this.collection.doc(id).delete();
  }
}
