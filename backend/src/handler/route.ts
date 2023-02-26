import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { onCreateExampleHandler } from './firestore/onCreateExampleHandler';
import { AddExampleHandler } from './http/addExampleHandler';
import { helloWorldHandler } from './http/helloWorldHandler';
import functions = require('firebase-functions');

initializeApp();

const db = getFirestore();

export const helloWorld = functions.https.onRequest(helloWorldHandler);

export const addExample = functions.https.onRequest(AddExampleHandler);

// FIXME local 環境ではトリガーされない
export const onCreateExample = functions.firestore
  .document('/example/{documentId}')
  .onCreate(onCreateExampleHandler);
