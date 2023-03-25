import { HTTPHandler } from '../type/hanlder';
import { responseJson } from '../util/response';

export type HelloWorldResp = {
  result: string;
};

export const helloWorldHandler: HTTPHandler<HelloWorldResp> = (req, res) => {
  responseJson(res, 'Hello World');
};
