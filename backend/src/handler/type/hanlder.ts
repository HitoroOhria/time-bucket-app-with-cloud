import { QueryDocumentSnapshot } from '@google-cloud/firestore';
import { ParamsOf } from 'firebase-functions/lib/common/params';
import { EventContext } from 'firebase-functions/lib/v1/cloud-functions';
import { Request, Response } from './http';

export type HTTPHandler<ResBody> = (req: Request, resp: Response<ResBody>) => void | Promise<void>;

export type OnCreateHandler = (
  snapshot: QueryDocumentSnapshot,
  context: EventContext<ParamsOf<string>>
) => Promise<void> | void;
