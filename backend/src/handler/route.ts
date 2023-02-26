import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { onCreateExampleHandler } from './firestore/onCreateExampleHandler';
import { AddExampleHandler } from './http/addExampleHandler';
import { helloWorldHandler } from './http/helloWorldHandler';
import functions = require('firebase-functions');

initializeApp();

const db = getFirestore();
// connectFirestoreEmulator(db, 'localhost', 8080);
process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080';

export const addUser = functions.https.onRequest(async (): Promise<any> => {
  const docRef = db.collection('example').doc('test');

  return docRef.set({
    first: 'Ada',
  });
});

export const helloWorld = functions.https.onRequest(helloWorldHandler);

export const addExample = functions.https.onRequest(AddExampleHandler);

// FIXME local 環境ではトリガーされない
export const onCreateExample = functions.firestore
  .document('/example/{documentId}')
  .onCreate(onCreateExampleHandler);
