import { Request } from 'firebase-functions';
import { initFirestore } from '../../infrastructure/firestore/firestore';
import { injectCreateExampleUseCase } from '../../injector/useCase';
import { HTTPHandler } from '../util/hanlder';

type AddExampleParams = {
  text: string;
};

export const createExampleHandler: HTTPHandler = async (req, res) => {
  const params = getRequestParams(req);

  const createExampleUseCase = injectCreateExampleUseCase(initFirestore());

  const result = await createExampleUseCase.exec(params);

  res.json({ result: `Message with ID: ${result.documentId} added.` });
};

const getRequestParams = (req: Request): AddExampleParams => {
  const text = req.query.text;
  if (text === undefined) {
    throw new Error('text param is undefined');
  }

  return {
    text: text.toString(),
  };
};
