import { Example } from '../entity/Example';

export interface ExampleRepositoryInterface {
  addExample(example: Example): Promise<string>;
}
