import { firestore } from 'firebase-admin';

type AddExampleArgs = {
  text: string;
};

type AddExampleResult = {
  documentId: string;
};

export class AddExampleUseCase {
  async exec(args: AddExampleArgs): Promise<AddExampleResult> {
    const snapshot = await firestore().collection('example').add({ text: args.text });

    return {
      documentId: snapshot.id,
    };
  }
}
