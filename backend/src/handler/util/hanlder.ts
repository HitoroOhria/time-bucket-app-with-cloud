import { QueryDocumentSnapshot } from '@google-cloud/firestore';
import { Request, Response } from 'firebase-functions';
import { ParamsOf } from 'firebase-functions/lib/common/params';
import { EventContext } from 'firebase-functions/lib/v1/cloud-functions';

export type HTTPHandler = (req: Request, resp: Response) => void | Promise<void>;

export type OnCreateHandler = (
  snapshot: QueryDocumentSnapshot,
  context: EventContext<ParamsOf<string>>
) => Promise<void> | void;
