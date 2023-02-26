import { Request } from 'firebase-functions';
import { initFirestore } from '../../infrastructure/firestore/firestore';
import { injectAddExampleUseCase } from '../../injector/useCase';
import { HTTPHanlder } from '../util/hanlder';

type AddExampleParams = {
  text: string;
};

export const AddExampleHandler: HTTPHanlder = async (req, res) => {
  const params = getRequestParams(req);

  const addExampleUseCase = injectAddExampleUseCase(initFirestore());

  const result = await addExampleUseCase.exec(params);

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
