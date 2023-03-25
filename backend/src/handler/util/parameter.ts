import { Params } from 'express-serve-static-core';
import { Request } from 'firebase-functions';

export const getParamFromBody = <P extends Params>(req: Request): P => {
  /**
   * 本来は以下のようにしたい
   *
   * const getParam <P = {id: string}>(req: Request): P => {
   *   const id = req.body.id
   *   if ( === undefined) {
   *     throw new Error('id param is undefined');
   *   }
   *
   *   return { id }
   * }
   */
  return req.body;
};
