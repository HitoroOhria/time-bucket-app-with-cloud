import { log } from 'firebase-functions/logger';
import { WriteResult } from 'firebase-admin/lib/firestore';
import { EventContext } from 'firebase-functions/lib/v1/cloud-functions';
import { QueryDocumentSnapshot } from 'firebase-functions/lib/v1/providers/firestore';

type OnCreateExampleArgs = {
  snapshot: QueryDocumentSnapshot;
  context: EventContext;
};

// TODO 命名は MakeExampleTextToUppercaseUseCase とかでいいかも
export class OnCreateExampleUseCase {
  async exec(args: OnCreateExampleArgs): Promise<WriteResult> {
    const text = args.snapshot.data().text;
    const uppercase = text.toUpperCase();

    log('Uppercasing', args.context.params.documentId, text);

    return args.snapshot.ref.set({ uppercase }, { merge: true });
  }
}
