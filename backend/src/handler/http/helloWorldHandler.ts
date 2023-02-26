import { HTTPHanlder } from '../util/hanlder';

export const helloWorldHandler: HTTPHanlder = (req, res) => {
  res.json({ result: 'Hello World' });
};
