import { Request, Response } from 'express'

import { DeleteBeverageUseCase } from './DeleteBeverageUseCase'

export class DeleteBeverageController {
  constructor(private deleteBeverageUseCase: DeleteBeverageUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.body
    try {
      await this.deleteBeverageUseCase.execute(id)

      return res.status(202).send()
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }
}
