import { compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import * as yup from 'yup'

import authConfig from '../../../config/auth'
import { PostgresUsersRepository } from './../../repositores/implementations/PostgresUsersRepository'

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

    if (!(await schema.isValid({ email, password }))) {
      userEmailOrPasswordIncorrect()
    }

    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      userEmailOrPasswordIncorrect()
    } else {
      if (!user.isActive)
        throw new Error('User disabled, contact the system admin')

      if (!compare(password, user.password)) {
        userEmailOrPasswordIncorrect()
      }

      return {
        email,
        name: user.name,
        token: jwt.sign(
          { userName: user.name, admin: user.admin },
          authConfig.secret,
          {
            expiresIn: authConfig.expiresIn,
            subject: user.id
          }
        )
      }
    }
  }
}
