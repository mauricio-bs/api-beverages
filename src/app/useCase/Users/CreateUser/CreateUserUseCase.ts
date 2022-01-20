import { IUsersRepository } from './../../../repositores/IUsersRepository'
import { User } from '../../../entities/User'
import { ICreateUserRequestDTO } from './CreateUserDTO'

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(userInformations: ICreateUserRequestDTO) {
    const emailAlreadyRegistered = await this.usersRepository.findByEmail(
      userInformations.email
    )

    if (emailAlreadyRegistered) {
      throw new Error('Email already registered')
    }

    const user = new User(userInformations)

    await this.usersRepository.store(user)
  }
}
