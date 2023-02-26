import { Request, Response } from 'firebase-functions';

export type HTTPHanlder = (req: Request, resp: Response) => void | Promise<void>;
