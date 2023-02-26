import { Handler } from './handler';

export const helloWorldHandler: Handler = (req, res) => {
  res.json({ result: 'Hello World' });
};
