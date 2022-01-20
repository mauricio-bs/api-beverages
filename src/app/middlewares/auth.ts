import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import authConfig from '../../config/auth'

export default async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  const authToken: any = req.headers.authorization

  if (!authToken) res.status(401).json({ error: 'Token not provided' })

  const token = authToken.split(' ')[1]

  try {
    jwt.verify(token, authConfig.secret, (err: any, decoded: any) => {
      if (err) throw new Error()

      req.userId = decoded.id
      req.userName = decoded.name

      return next()
    })
  } catch (err) {
    return res.status(401).json({ error: 'Token is invalid' })
  }
}
