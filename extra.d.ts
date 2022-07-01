import { VercelRequest, VercelResponse } from '@vercel/node'

export type IncomingMessage = VercelRequest

export type RequestListener = (req: VercelRequest, res: VercelResponse) => void
