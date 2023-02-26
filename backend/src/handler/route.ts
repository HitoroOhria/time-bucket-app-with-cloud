import { initializeApp } from 'firebase-admin/app';
import { WriteResult } from 'firebase-admin/firestore';
import { EventContext } from 'firebase-functions/lib/v1/cloud-functions';
import { QueryDocumentSnapshot } from 'firebase-functions/lib/v1/providers/firestore';
import { AddExampleHandler } from './http/addExampleHandler';
import { helloWorldHandler } from './http/helloWorldHandler';
import functions = require('firebase-functions');
import { onCreateExampleHandler } from './firestore/onCreateExampleHandler';

initializeApp();

export const helloWorld = functions.https.onRequest(helloWorldHandler);

export const addExample = functions.https.onRequest(AddExampleHandler);

export const onCreateExample = functions.firestore
  .document('/example/{documentId}')
  .onCreate(onCreateExampleHandler);

const sample = functions.firestore
  .document('/messages/{documentId}')
  .onCreate((snap: QueryDocumentSnapshot, context: EventContext): Promise<WriteResult> => {
    const original = snap.data().original;

    functions.logger.log('Uppercasing', context.params.documentId, original);

    const uppercase = original.toUpperCase();

    return snap.ref.set({ uppercase }, { merge: true });
  });
