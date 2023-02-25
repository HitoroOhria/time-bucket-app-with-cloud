import { initializeApp } from 'firebase-admin/lib/firebase-namespace-api';
import { firestore } from 'firebase-admin/lib/firestore/firestore-namespace';
import { Request, Response } from 'firebase-functions';
import { log } from 'firebase-functions/lib/logger';
import { EventContext } from 'firebase-functions/lib/v1/cloud-functions';
import { onRequest } from 'firebase-functions/lib/v1/providers/https';
import { document, QueryDocumentSnapshot } from 'firebase-functions/lib/v1/providers/firestore';
import { WriteResult } from 'firebase-admin/firestore';

initializeApp();

export const addMessage = onRequest(async (req: Request, res: Response): Promise<void> => {
  const original = req.query.text;

  const snapshot = await firestore().collection('messages').add({ original: original });

  res.json({ result: `Message with ID: ${snapshot.id} added.` });
});

export const makeUppercase = document('/messages/{documentId}').onCreate(
  (snap: QueryDocumentSnapshot, context: EventContext): Promise<WriteResult> => {
    const original = snap.data().original;

    log('Uppercasing', context.params.documentId, original);

    const uppercase = original.toUpperCase();

    return snap.ref.set({ uppercase }, { merge: true });
  }
);
