import { QueryDocumentSnapshot } from '@google-cloud/firestore';
import { Params, ParamsDictionary } from 'express-serve-static-core';
import { Request, Response } from 'firebase-functions';
import { ParamsOf } from 'firebase-functions/lib/common/params';
import { EventContext } from 'firebase-functions/lib/v1/cloud-functions';

export type HTTPHandler<P extends Params = ParamsDictionary, ResBody = any> = (
  req: Request<P>,
  resp: Response<ResBody>
) => void | Promise<void>;

export type OnCreateHandler = (
  snapshot: QueryDocumentSnapshot,
  context: EventContext<ParamsOf<string>>
) => Promise<void> | void;
