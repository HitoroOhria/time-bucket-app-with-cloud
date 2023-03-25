import { Response as functionResponse } from 'firebase-functions';
import { Request as functionRequest } from 'firebase-functions/lib/v1/providers/https';

/**
 * 以下の Request, Response の型を export する。
 * - import { onRequest, onCall } from 'firebase-functions/v1/https';
 *
 * Request, Response は 'firebase-functions' パッケージ内に複数あるため、
 * 期待する型に import 元を固定する。
 */
export type Request = functionRequest;
export type Response<ResBody = any> = functionResponse<ResBody>;
