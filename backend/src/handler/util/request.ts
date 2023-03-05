import { QueryDocumentSnapshot } from '@google-cloud/firestore';
import { Request, Response } from 'firebase-functions';
import { CloudFunction, HttpsFunction } from 'firebase-functions/lib/v1/cloud-functions';
import { document } from 'firebase-functions/v1/firestore';
import { onRequest } from 'firebase-functions/v1/https';
import { HTTPHandler, OnCreateHandler } from './hanlder';

export const onGet = (handler: HTTPHandler): HttpsFunction => {
  return onRequest((req: Request, res: Response) => {
    if (req.method !== 'GET') {
      res.status(405).send('Method Not Allowed');
    }

    return handler(req, res);
  });
};

export const onPost = (handler: HTTPHandler): HttpsFunction => {
  return onRequest((req: Request, res: Response) => {
    if (req.method !== 'POST') {
      res.status(405).send('Method Not Allowed');
    }

    return handler(req, res);
  });
};

export const onCreate = (
  documentPath: string,
  handler: OnCreateHandler
): CloudFunction<QueryDocumentSnapshot> => {
  return document(documentPath).onCreate(handler);
};
