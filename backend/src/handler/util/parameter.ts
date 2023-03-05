import { Request } from 'firebase-functions';

type BaseResp = {
  result: string;
};

export const getParamFromBody = (req: Request, paramName: string): string => {
  const value = req.body[paramName];
  if (value === undefined) {
    throw new Error(`${paramName} param is undefined`);
  }

  return value.toString();
};
