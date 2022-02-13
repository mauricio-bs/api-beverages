import { Request, Response } from 'express'

import { CreateCategoryUseCase } from './CreateCategoryUseCase'

export class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { filename: imageUrl } = req.file
      const { name, isActive } = req.body

      await this.createCategoryUseCase.execute({ name, imageUrl, isActive })

      return res.status(201).send()
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }
}
