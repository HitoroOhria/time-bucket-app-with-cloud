import { Example } from '../domain/entity/Example';
import { ExampleRepositoryInterface } from '../domain/repository/ExampleRepositoryInterface';

type AddExampleUseCaseDeps = {
  exampleRepository: ExampleRepositoryInterface;
};

type AddExampleArgs = {
  text: string;
};

type AddExampleResult = {
  documentId: string;
};

export class AddExampleUseCase {
  private readonly exampleRepository: ExampleRepositoryInterface;

  constructor(deps: AddExampleUseCaseDeps) {
    this.exampleRepository = deps.exampleRepository;
  }

  async exec(args: AddExampleArgs): Promise<AddExampleResult> {
    const example = new Example({
      text: args.text,
    });

    const documentId = await this.exampleRepository.addExample(example);

    return {
      documentId,
    };
  }
}
