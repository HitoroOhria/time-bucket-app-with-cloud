import { initializeApp } from 'firebase-admin/app';
import { onCreateExampleHandler } from './firestore/onCreateExampleHandler';
import { createExampleHandler } from './http/createExampleHandler';
import { CreateTodoHandler } from './http/createTodoHnadler';
import { helloWorldHandler } from './http/helloWorldHandler';
import { onCreate, onGet, onPost } from './util/request';

initializeApp();

// ----- Example -----

export const helloWorld = onGet(helloWorldHandler);

export const createExample = onPost(createExampleHandler);

export const onCreateExample = onCreate('/example/{documentId}', onCreateExampleHandler);

// ----- Todo -----

export const createTodo = onPost(CreateTodoHandler);
