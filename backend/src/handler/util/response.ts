import { Response } from '../type/http';

type BaseResponse<R> = {
  result: R;
};

/**
 * レスポンスオブジェクトは以下の形を満たす必要がある。
 * type AnyHandlerResp = { result: any }
 * typeof res === Response<AnyHandlerResp>
 *
 * @param res
 * @param value
 */
export const responseJson = <V>(res: Response<BaseResponse<V>>, value: V): void => {
  res.json({ result: value });
};
