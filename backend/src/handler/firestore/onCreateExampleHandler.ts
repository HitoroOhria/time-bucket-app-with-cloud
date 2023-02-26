import { OnCreateExampleUseCase } from '../../usecase/onCreateExampleUseCase';
import { OnCreateHandler } from './handler';

export const onCreateExampleHandler: OnCreateHandler = async (snapshot, context) => {
  const onCreateExampleUseCase = new OnCreateExampleUseCase();

  await onCreateExampleUseCase.exec({ snapshot, context });
};
