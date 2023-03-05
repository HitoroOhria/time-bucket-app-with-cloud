import { initializeApp } from 'firebase-admin/app';
import { onCreateExampleHandler } from './firestore/onCreateExampleHandler';
import { AddExampleHandler } from './http/addExampleHandler';
import { CreateTodoHandler } from './http/createTodoHnadler';
import { helloWorldHandler } from './http/helloWorldHandler';
import { onCreate, onGet, onPost } from './util/request';

initializeApp();

// ----- Example -----

export const helloWorld = onGet(helloWorldHandler);

export const addExample = onPost(AddExampleHandler);

export const onCreateExample = onCreate('/example/{documentId}', onCreateExampleHandler);

// ----- Todo -----

// @ts-ignore
// Type 'ParamsDictionary' is missing the following properties from type 'CreateTodoParams': id, text
export const createTodo = onPost(CreateTodoHandler);
