import {
  DocumentData,
  Firestore,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
} from '@google-cloud/firestore';
import { getFirestore } from 'firebase-admin/firestore';
import { ExampleModel } from '../model/ExampleModel';
import { TodoModel } from '../model/TodoModel';
import * as process from 'process';

export const initFirestore = (useEmulator: boolean = false): Firestore => {
  /**
   * ローカルでサーバーを立てる場合は firebase emulators:start すれば自動的にエミュレーターを参照する
   * process.env.FIRESTORE_EMULATOR_HOST がフックであり、上記コマンドで自動的に設定される
   * @see https://cloud.google.com/firestore/docs/emulator?hl=ja#server_client_libraries
   */
  if (useEmulator) {
    process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080';
    process.env.FIRESTORE_PROJECT_ID = 'test-project';
  }

  return getFirestore();
};

const converter = <T extends DocumentData>(): FirestoreDataConverter<T> => ({
  toFirestore: (data: T): DocumentData => data,
  fromFirestore: (snap: QueryDocumentSnapshot<T>): T => snap.data(),
});

export const collections = (db: Firestore) => ({
  example: db.collection('example').withConverter(converter<ExampleModel>()),
  todo: db.collection('todos').withConverter(converter<TodoModel>()),
});
