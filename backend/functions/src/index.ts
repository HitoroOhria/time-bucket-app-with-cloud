import { WriteResult } from 'firebase-admin/firestore';
import { Request, Response } from 'firebase-functions';
import { EventContext } from 'firebase-functions/lib/v1/cloud-functions';
import { QueryDocumentSnapshot } from 'firebase-functions/lib/v1/providers/firestore';
import functions = require('firebase-functions');
import admin = require('firebase-admin');

admin.initializeApp();

exports.addMessage = functions.https.onRequest(
  async (req: Request, res: Response): Promise<void> => {
    const original = req.query.text;

    const snapshot = await admin.firestore().collection('messages').add({ original: original });

    res.json({ result: `Message with ID: ${snapshot.id} added.` });
  }
);

exports.makeUppercase = functions.firestore
  .document('/messages/{documentId}')
  .onCreate((snap: QueryDocumentSnapshot, context: EventContext): Promise<WriteResult> => {
    const original = snap.data().original;

    functions.logger.log('Uppercasing', context.params.documentId, original);

    const uppercase = original.toUpperCase();

    return snap.ref.set({ uppercase }, { merge: true });
  });
