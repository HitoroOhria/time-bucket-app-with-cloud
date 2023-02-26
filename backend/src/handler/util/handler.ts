import { Request, Response } from 'firebase-functions';

export type Handler = (req: Request, resp: Response) => void | Promise<void>;
