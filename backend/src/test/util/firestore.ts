import { Firestore, Query } from '@google-cloud/firestore';

const deleteLimitSize = 100;

// @see https://firebase.google.com/docs/firestore/manage-data/delete-data?hl=ja#node.js_2
export const deleteCollection = async (db: Firestore, collectionPath: string) => {
  const collectionRef = db.collection(collectionPath);
  const query = collectionRef.orderBy('__name__').limit(deleteLimitSize);

  return new Promise((resolve, reject) => {
    deleteQueryBatch(db, query, resolve).catch(reject);
  });
};

const deleteQueryBatch = async (
  db: Firestore,
  query: Query,
  resolve: (value?: unknown) => void
) => {
  const snapshot = await query.get();

  const batchSize = snapshot.size;
  if (batchSize === 0) {
    // When there are no documents left, we are done
    resolve();
    return;
  }

  // Delete documents in a batch
  const batch = db.batch();
  snapshot.docs.forEach((doc) => {
    batch.delete(doc.ref);
  });
  await batch.commit();

  // Recurse on the next process tick, to avoid
  // exploding the stack.
  process.nextTick(() => {
    deleteQueryBatch(db, query, resolve);
  });
};
