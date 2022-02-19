import { Request, Response } from 'express'

import { CreateBeverageUseCase } from './CreateBeverageUseCase'

export class CreateBeverageController {
  constructor(private createBeverageUseCase: CreateBeverageUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { filename: imageUrl } = (req as any).file
      const { name, description, isActive, categories, price, stock_quantity } =
        req.body

      await this.createBeverageUseCase.execute({
        name,
        description,
        imageUrl,
        isActive,
        categories,
        price,
        stock_quantity
      })

      return res.status(201).send()
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }
}
