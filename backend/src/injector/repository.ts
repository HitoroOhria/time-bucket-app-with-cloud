import { Firestore } from '@google-cloud/firestore';
import { ExampleRepositoryInterface } from '../domain/repository/ExampleRepositoryInterface';
import { ExampleRepository } from '../infrastructure/repository/ExampleRepository';

export const injectAddExampleRepository = (db: Firestore): ExampleRepositoryInterface => {
  return new ExampleRepository(db);
};
