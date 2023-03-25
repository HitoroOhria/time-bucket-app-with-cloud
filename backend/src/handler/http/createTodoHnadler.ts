import { initFirestore } from '../../infrastructure/firestore/firestore';
import { injectCreateTodoUseCase } from '../../injector/useCase';
import { HTTPHandler } from '../type/hanlder';
import { getParamFromBody } from '../util/parameter';
import { responseJson } from '../util/response';

export type CreateTodoParams = {
  id: string;
  text: string;
};

export type CreateTodoResp = {
  result: string;
};

export const CreateTodoHandler: HTTPHandler<CreateTodoResp> = async (req, res) => {
  const params = getParamFromBody<CreateTodoParams>(req);

  const createTodoUseCase = injectCreateTodoUseCase(initFirestore());
  await createTodoUseCase.exec(params);

  responseJson(res, 'Todo Created.');
};
