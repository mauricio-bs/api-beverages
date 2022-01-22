import { Request, Response } from 'express'

export class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { name, imageUrl } = req.body

      await this.createCategoryUseCase.execute({ name, imageUrl })

      return res.status(201).send()
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }
}
