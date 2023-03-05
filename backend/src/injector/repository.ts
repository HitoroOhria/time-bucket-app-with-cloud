import { Firestore } from '@google-cloud/firestore';
import { ExampleRepositoryInterface } from '../domain/repository/ExampleRepositoryInterface';
import { TodoRepositoryInterface } from '../domain/repository/TodoRepositoryInterface';
import { ExampleRepository } from '../infrastructure/repository/ExampleRepository';
import { TodoRepository } from '../infrastructure/repository/TodoRepository';

export const injectAddExampleRepository = (db: Firestore): ExampleRepositoryInterface => {
  return new ExampleRepository(db);
};

export const injectTodoRepository = (db: Firestore): TodoRepositoryInterface => {
  return new TodoRepository(db);
};
