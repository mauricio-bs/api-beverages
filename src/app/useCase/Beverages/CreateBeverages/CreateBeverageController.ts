import { Request, Response } from 'express'

import { CreateBeverageUseCase } from './CreateBeverageUseCase'

export class CreateBeverageController {
  constructor(private createBeverageUseCase: CreateBeverageUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { name, description, imageUrl, isActive, categories } = req.body

      await this.createBeverageUseCase.execute({
        name,
        description,
        imageUrl,
        isActive,
        categories
      })

      return res.status(201).send()
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }
}
