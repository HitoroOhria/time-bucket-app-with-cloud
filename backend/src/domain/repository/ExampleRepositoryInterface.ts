import { Example } from '../entity/Example';

export interface ExampleRepositoryInterface {
  createExample(example: Example): Promise<string>;
}
