import { Request, Response } from 'express'

import { UpdateCategoryUseCase } from './UpdateCategoryUseCase'

export class UpdateCategoryController {
  constructor(private updateCategoryUseCase: UpdateCategoryUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { categoryId } = req.params
      const { filename: imageUrl } = req.file
      const { name, isActive } = req.body

      await this.updateCategoryUseCase.execute({
        name,
        imageUrl,
        isActive,
        categoryId: Number(categoryId)
      })

      return res.status(201).send()
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }
}
