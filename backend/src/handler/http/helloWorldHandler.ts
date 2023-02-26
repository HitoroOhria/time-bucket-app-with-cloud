import { Handler } from '../util/handler';

export const helloWorldHandler: Handler = (req, res) => {
  res.json({ result: 'Hello World' });
};
