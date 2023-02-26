import { Request } from 'firebase-functions';
import { Handler } from './handler';
import { AddExampleUseCase } from '../usecase/addExampleUseCase';

type AddExampleParams = {
  text: string;
};

export const AddExampleHandler: Handler = async (req, res) => {
  const params = getRequestParams(req);

  const addExampleUseCase = new AddExampleUseCase();

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
