import { SignInUseCase } from './SignInUseCase'
import { Request, Response } from 'express'

export class SignInController {
  constructor(private signInUseCase: SignInUseCase) {}

  async handle(req: Request, res: Response): Promise<Object> {
    const { email, password } = req.body
    try {
      const token = await this.signInUseCase.execute(email, password)

      return res.status(200).json(token)
    } catch (err) {
      return res.status(400).json({ message: (err as Error).message })
    }
  }
}
