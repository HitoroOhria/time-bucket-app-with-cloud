import { HTTPHandler } from '../util/hanlder';

export const helloWorldHandler: HTTPHandler = (req, res) => {
  res.json({ result: 'Hello World' });
};
