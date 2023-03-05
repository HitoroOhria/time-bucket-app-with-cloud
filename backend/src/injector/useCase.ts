import { Firestore } from '@google-cloud/firestore';
import { CreateExampleUseCase } from '../usecase/createExampleUseCase';
import { CreateTodoUseCase } from '../usecase/createTodoUseCase';
import { injectExampleRepository, injectTodoRepository } from './repository';

export const injectCreateExampleUseCase = (db: Firestore): CreateExampleUseCase => {
  return new CreateExampleUseCase({
    exampleRepository: injectExampleRepository(db),
  });
};

export const injectCreateTodoUseCase = (db: Firestore): CreateTodoUseCase => {
  return new CreateTodoUseCase({
    todoRepository: injectTodoRepository(db),
  });
};
