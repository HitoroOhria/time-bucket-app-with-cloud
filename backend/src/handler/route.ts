import { initializeApp } from 'firebase-admin/app';
import { document } from 'firebase-functions/v1/firestore';
import { onRequest } from 'firebase-functions/v1/https';
import { onCreateExampleHandler } from './firestore/onCreateExampleHandler';
import { AddExampleHandler } from './http/addExampleHandler';
import { helloWorldHandler } from './http/helloWorldHandler';

initializeApp();

export const helloWorld = onRequest(helloWorldHandler);

export const addExample = onRequest(AddExampleHandler);

export const onCreateExample = document('/example/{documentId}').onCreate(onCreateExampleHandler);
