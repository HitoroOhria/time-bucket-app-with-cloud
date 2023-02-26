import { WriteResult } from 'firebase-admin/lib/firestore';
import { EventContext } from 'firebase-functions/lib/v1/cloud-functions';
import { QueryDocumentSnapshot } from 'firebase-functions/lib/v1/providers/firestore';
import { OnCreateExampleUseCase } from '../../usecase/onCreateExampleUseCase';

export const onCreateExampleHandler = (
  snapshot: QueryDocumentSnapshot,
  context: EventContext
): Promise<WriteResult> => {
  const onCreateExampleUseCase = new OnCreateExampleUseCase();

  return onCreateExampleUseCase.exec({ snapshot, context });
};
