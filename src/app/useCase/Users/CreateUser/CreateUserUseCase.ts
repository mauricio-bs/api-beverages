import { hash } from 'bcryptjs'
import * as yup from 'yup'

import { User } from '../../../entities/User'
import { IUsersRepository } from './../../../repositores/IUsersRepository'
import { ICreateUserRequestDTO } from './CreateUserDTO'

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(userInformations: ICreateUserRequestDTO) {
    const schema = yup.object().shape({
      email: yup.string().email('Insert a valid email'),
      password: yup.string().required('Password is required'),
      confirmPasword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords does not match')
    })

    try {
      await schema.isValid(userInformations, { abortEarly: false })
    } catch (err) {
      throw new Error(err.errors)
    }

    const emailAlreadyRegistered = await this.usersRepository.findByEmail(
      userInformations.email
    )
    if (emailAlreadyRegistered) {
      throw new Error('Email already registered')
    }

    userInformations.password = await hash(userInformations.password, 10)

    const user = new User(userInformations)

    await this.usersRepository.store(user)
  }
}
