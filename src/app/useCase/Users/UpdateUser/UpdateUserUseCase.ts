import { User } from './../../../entities/User'
import { IUsersRepository } from './../../../repositores/IUsersRepository'
import { ICreateUserRequestDTO } from './UpdateUserDTO'

export class UpdateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(userInformations: ICreateUserRequestDTO) {
    if (userInformations?.email) {
      const emailAlreadyRegistered = await this.usersRepository.findByEmail(
        userInformations.email
      )

      if (
        !!emailAlreadyRegistered &&
        emailAlreadyRegistered.id !== userInformations.id
      ) {
        throw new Error('Email already registered')
      }
    }

    const user = new User(userInformations)

    await this.usersRepository.update(userInformations.id, user)
  }
}
