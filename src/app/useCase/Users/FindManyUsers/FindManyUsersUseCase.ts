import { IUsersRepository } from './../../../repositores/IUsersRepository'
import { FindManyUsersRequestDTO } from './FindManyUsersDTO'
export class FindManyUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(params: FindManyUsersRequestDTO) {
    const users = await this.usersRepository.findMany(
      params.admin,
      params.isActive
    )

    let formatedUsers
    // Remove password from users
    if (users) {
      formatedUsers = users.map(user => ({
        id: user?.id,
        name: user?.name,
        email: user?.email,
        birthDate: user?.birthDate,
        admin: user?.admin,
        isActive: user?.isActive
      }))
    }

    return formatedUsers
  }
}
