import { Request } from 'firebase-functions';
import { initFirestore } from '../../infrastructure/firestore/firestore';
import { injectCreateTodoUseCase } from '../../injector/useCase';
import { HTTPHandler } from '../util/hanlder';

export type CreateTodoParams = {
  id: string;
  text: string;
};

export type CreateTodoResp = {
  result: string;
};

export const CreateTodoHandler: HTTPHandler<CreateTodoParams, CreateTodoResp> = async (
  req,
  res
) => {
  const params = getRequestParams(req);

  const createTodoUseCase = injectCreateTodoUseCase(initFirestore());

  await createTodoUseCase.exec(params);

  res.json({ result: 'Todo created.' });
};

const getRequestParams = (req: Request<CreateTodoParams>): CreateTodoParams => {
  return {
    id: req.body.id,
    text: req.body.text,
  };
};
