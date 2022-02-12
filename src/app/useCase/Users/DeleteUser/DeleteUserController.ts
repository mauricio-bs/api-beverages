import { Request, Response } from 'express'

import { DeleteUserUseCase } from './DeleteUserUseCase'

export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params
    try {
      await this.deleteUserUseCase.execute(id)

      return res.status(202).send()
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }
}
