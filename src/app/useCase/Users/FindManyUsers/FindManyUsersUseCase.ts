import { PostgresUsersRepository } from './../../../repositores/implementations/PostgresUsersRepository'
import { FindManyUsersRequestDTO } from './FindManyUsersDTO'
export class FindManyUsersUseCase {
  constructor(private usersRepository: PostgresUsersRepository) {}

  async execute(params: FindManyUsersRequestDTO) {
    const users = await this.usersRepository.findMany(
      params.admin,
      params.isActive
    )

    return users
  }
}
