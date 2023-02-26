import {
  DocumentData,
  Firestore,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
} from '@google-cloud/firestore';
import { getFirestore } from 'firebase-admin/firestore';
import { ExampleModel } from '../model/ExampleModel';

export const initFirestore = (): Firestore => {
  const isEmulator = process.env.FIRESTORE_EMULATOR_HOST !== undefined;
  console.log('isEmulator', isEmulator);

  if (isEmulator) {
    process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8081';
  }

  return getFirestore();
};

const converter = <T extends DocumentData>(): FirestoreDataConverter<T> => ({
  toFirestore: (data: T): DocumentData => data,
  fromFirestore: (snap: QueryDocumentSnapshot<T>): T => snap.data(),
});

export const collections = (db: Firestore) => ({
  example: db.collection('example').withConverter(converter<ExampleModel>()),
});
