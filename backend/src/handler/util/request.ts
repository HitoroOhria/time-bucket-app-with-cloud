import { QueryDocumentSnapshot } from '@google-cloud/firestore';
import { CloudFunction, HttpsFunction } from 'firebase-functions/lib/v1/cloud-functions';
import { document } from 'firebase-functions/v1/firestore';
import { onRequest } from 'firebase-functions/v1/https';
import { HTTPHandler, OnCreateHandler } from '../type/hanlder';
import { Request, Response } from '../type/http';

export const onGet = (handler: HTTPHandler<any>): HttpsFunction => {
  return onRequest((req: Request, res: Response) => {
    if (req.method !== 'GET') {
      res.status(405).send('Method Not Allowed');
    }

    return handler(req, res);
  });
};

export const onPost = (handler: HTTPHandler<any>): HttpsFunction => {
  return onRequest((req, res) => {
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
