import { initializeApp } from 'firebase-admin/app';
import { onCreateExampleHandler } from './firestore/onCreateExampleHandler';
import { AddExampleHandler } from './http/addExampleHandler';
import { helloWorldHandler } from './http/helloWorldHandler';
import { onCreate, onGet, onPost } from './util/request';

initializeApp();

export const helloWorld = onGet(helloWorldHandler);

export const addExample = onPost(AddExampleHandler);

export const onCreateExample = onCreate('/example/{documentId}', onCreateExampleHandler);
