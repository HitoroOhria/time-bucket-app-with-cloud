import { Firestore } from '@google-cloud/firestore';
import { AddExampleUseCase } from '../usecase/addExampleUseCase';
import { injectAddExampleRepository } from './repository';

export const injectAddExampleUseCase = (db: Firestore): AddExampleUseCase => {
  return new AddExampleUseCase({
    exampleRepository: injectAddExampleRepository(db),
  });
};
