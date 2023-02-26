import { QueryDocumentSnapshot } from '@google-cloud/firestore';
import { ParamsOf } from 'firebase-functions/lib/common/params';
import { EventContext } from 'firebase-functions/lib/v1/cloud-functions';

export type OnCreateHandler = (
  snapshot: QueryDocumentSnapshot,
  context: EventContext<ParamsOf<string>>
) => Promise<void> | void;
