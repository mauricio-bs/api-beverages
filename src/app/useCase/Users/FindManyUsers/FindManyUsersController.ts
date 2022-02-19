import { Request, Response } from 'express'

import { FindManyUsersUseCase } from './FindManyUsersUseCase'

export class FindManyUsersController {
  constructor(private findManyUsersUseCase: FindManyUsersUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const { admin, isActive } = req.query

      const users = await this.findManyUsersUseCase.execute({
        admin,
        isActive
      })

      return res.status(200).json(users)
    } catch (err) {
      return res.status(400).json({ message: err.message })
    }
  }
}
