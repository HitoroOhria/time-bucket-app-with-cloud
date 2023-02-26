import { CollectionReference, Firestore } from '@google-cloud/firestore';
import { Example } from '../../domain/entity/Example';
import { collections } from '../firestore/firestore';
import { exampleEntityToModel, ExampleModel } from '../model/ExampleModel';

export class ExampleRepository {
  private readonly collection: CollectionReference<ExampleModel>;

  constructor(db: Firestore) {
    this.collection = collections(db).example;
  }

  async addExample(example: Example): Promise<string> {
    const exampleModel = exampleEntityToModel(example);

    const snapshot = await this.collection.add(exampleModel);

    return snapshot.id;
  }
}
