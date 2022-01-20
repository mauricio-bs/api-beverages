import { PostgresUsersRepository } from './../../repositores/implementations/PostgresUsersRepository'
import * as yup from 'yup'
import jwt from 'jsonwebtoken'
import authConfig from '../../../config/auth'
import { compare } from 'bcryptjs'

export class SignInUseCase {
  constructor(private usersRepository: PostgresUsersRepository) {}

  async execute(email: string, password: string) {
    const schema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required()
    })

    const userEmailOrPasswordIncorrect = () => {
      throw new Error('Make sure yur password or email are correct')
    }

    if (!(await schema.isValid({ email, password })))
      userEmailOrPasswordIncorrect()

    const user = await this.usersRepository.findByEmail(email)

    if (!user) userEmailOrPasswordIncorrect()

    if (!compare(password, user.password)) userEmailOrPasswordIncorrect()

    return {
      id: user.id,
      email,
      name: user.name,
      token: jwt.sign({ id: user.id, userName: user.name }, authConfig.secret, {
        expiresIn: authConfig.expiresIn
      })
    }
  }
}