import { Request, Response } from 'express'

import { UpdateBeverageUseCase } from './UpdateBeverageUseCase'

export class UpdateBeverageController {
  constructor(private updateBeverageUseCase: UpdateBeverageUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { beverageId } = req.params
      const {
        name,
        description,
        imageUrl,
        isActive,
        categories,
        price,
        stock_quantity
      } = req.body

      await this.updateBeverageUseCase.execute(beverageId, {
        name,
        description,
        imageUrl,
        isActive,
        categories,
        price,
        stock_quantity
      })

      return res.status(200).send()
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }
}
