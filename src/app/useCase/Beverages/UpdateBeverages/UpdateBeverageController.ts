import { Request, Response } from 'express'

import { UpdateBeverageUseCase } from './UpdateBeverageUseCase'

export class UpdateBeverageController {
  constructor(private updateBeverageUseCase: UpdateBeverageUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const { name, description, imageUrl, isActive, categories } = req.body

      await this.updateBeverageUseCase.execute(id, {
        name,
        description,
        imageUrl,
        isActive,
        categories
      })

      return res.status(200).send()
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }
}
