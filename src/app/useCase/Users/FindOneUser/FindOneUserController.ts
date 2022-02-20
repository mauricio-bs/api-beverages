import { Request, Response } from 'express'

import { FindOneUserUseCase } from './FindOneUserUseCase'
export class FindOneUserController {
  constructor(private findOneUserUseCase: FindOneUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { userId } = req.params
      const user = await this.findOneUserUseCase.execute(userId)

      return res.status(200).json(user)
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }
}
