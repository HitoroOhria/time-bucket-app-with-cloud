import { initFirestore } from '../../infrastructure/firestore/firestore';
import { injectCreateExampleUseCase } from '../../injector/useCase';
import { HTTPHandler } from '../type/hanlder';
import { getParamFromBody } from '../util/parameter';
import { responseJson } from '../util/response';

type AddExampleParams = {
  text: string;
};

type AddExampleResp = {
  result: string;
};

export const createExampleHandler: HTTPHandler<AddExampleResp> = async (req, res) => {
  const params = getParamFromBody<AddExampleParams>(req);

  const createExampleUseCase = injectCreateExampleUseCase(initFirestore());
  const result = await createExampleUseCase.exec(params);

  responseJson(res, `Message with ID: ${result.documentId} added.`);
};
