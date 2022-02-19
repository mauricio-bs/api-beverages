import { User } from './../../../entities/User'
import { IUsersRepository } from './../../../repositores/IUsersRepository'
import { IUpdateUserRequestDTO } from './UpdateUserDTO'

export class UpdateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(userInformations: IUpdateUserRequestDTO) {
    const userExists = await this.usersRepository.findById(
      userInformations.userId
    )
    if (!userExists) throw new Error('User not found')

    if (userInformations?.email) {
      const emailAlreadyRegistered = await this.usersRepository.findByEmail(
        userInformations.email
      )

      if (
        !!emailAlreadyRegistered &&
        emailAlreadyRegistered.id !== userInformations.userId
      ) {
        throw new Error('Email already registered')
      }
    }

    const user = new User(userInformations)

    await this.usersRepository.update(userInformations.userId, user)
  }
}
