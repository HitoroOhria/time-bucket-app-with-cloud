import { Firestore } from '@google-cloud/firestore';
import { AddExampleUseCase } from '../usecase/addExampleUseCase';
import { CreateTodoUseCase } from '../usecase/createTodoUseCase';
import { injectAddExampleRepository, injectTodoRepository } from './repository';

export const injectAddExampleUseCase = (db: Firestore): AddExampleUseCase => {
  return new AddExampleUseCase({
    exampleRepository: injectAddExampleRepository(db),
  });
};

export const injectCreateTodoUseCase = (db: Firestore): CreateTodoUseCase => {
  return new CreateTodoUseCase({
    todoRepository: injectTodoRepository(db),
  });
};
