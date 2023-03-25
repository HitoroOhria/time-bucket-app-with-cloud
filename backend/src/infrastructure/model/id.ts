import { DocumentSnapshot, QuerySnapshot } from '@google-cloud/firestore';

export type WithId<T> = { id: string } & T;

export const getModelWithId = <T>(snap: DocumentSnapshot<T>): WithId<T> | undefined => {
  const data = snap.data();
  if (data === undefined) {
    return undefined;
  }

  return {
    id: snap.id,
    ...data,
  };
};

export const getModelsWithId = <T>(snap: QuerySnapshot<T>): WithId<T>[] => {
  return snap.docs
    .map((doc) => getModelWithId<T>(doc))
    .filter((model): model is WithId<T> => model !== undefined);
};
