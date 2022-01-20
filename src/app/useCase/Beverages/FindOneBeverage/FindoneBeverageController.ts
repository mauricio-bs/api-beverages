import { Request, Response } from 'express'

import { FindOneBeveragesUseCase } from './FindoneBeverageUseCase'

export class FindOneBeverageController {
  constructor(private findOneBeveragesUseCase: FindOneBeveragesUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params

      const beverage = await this.findOneBeveragesUseCase.execute(id)

      return res.status(200).json(beverage)
    } catch (err) {
      return res.status(400).json({ message: (err as Error).message })
    }
  }
}
