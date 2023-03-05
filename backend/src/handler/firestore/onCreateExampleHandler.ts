import { OnCreateExampleUseCase } from '../../usecase/onCreateExampleUseCase';
import { OnCreateHandler } from '../util/hanlder';

export const onCreateExampleHandler: OnCreateHandler = async (snapshot, context) => {
  const onCreateExampleUseCase = new OnCreateExampleUseCase();

  await onCreateExampleUseCase.exec({ snapshot, context });
};
