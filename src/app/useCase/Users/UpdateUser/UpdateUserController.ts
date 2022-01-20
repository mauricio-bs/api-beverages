import { Request, Response } from 'express'

import { UpdateUserUseCase } from './UpdateUserUseCase'

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { name, email, password, admin, isActive, birthDate } = req.body

    try {
      await this.updateUserUseCase.execute({
        id,
        name,
        email,
        password,
        birthDate,
        admin,
        isActive
      })

      return res.status(202).send()
    } catch (err) {
      return res.status(400).json({ message: (err as Error).message })
    }
  }
}