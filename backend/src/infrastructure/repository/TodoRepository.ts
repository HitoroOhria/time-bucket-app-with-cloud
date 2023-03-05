import { CollectionReference, Firestore } from '@google-cloud/firestore';
import { Todo } from '../../domain/entity/Todo';
import { TodoRepositoryInterface } from '../../domain/repository/TodoRepositoryInterface';
import { collections } from '../firestore/firestore';
import { todoEntityToModel, TodoModel } from '../model/TodoModel';

export class TodoRepository implements TodoRepositoryInterface {
  private readonly collection: CollectionReference<TodoModel>;

  constructor(db: Firestore) {
    this.collection = collections(db).todo;
  }

  async create(todo: Todo): Promise<void> {
    const todoModel = todoEntityToModel(todo);

    await this.collection.doc(todo.id).create(todoModel);

    return;
  }
}
