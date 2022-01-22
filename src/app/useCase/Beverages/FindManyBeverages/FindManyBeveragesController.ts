import { Request, Response } from 'express'

import { FindManyBeveragesUseCase } from './FindManyBeveragesUseCase'

export class FindManyBeveragesController {
  constructor(private findManyBeveragesUseCase: FindManyBeveragesUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const { isActive, categories, name } = req.body

      const beverages = await this.findManyBeveragesUseCase.execute({
        isActive,
        categories,
        name
      })

      return res.status(200).json(beverages)
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }
}
