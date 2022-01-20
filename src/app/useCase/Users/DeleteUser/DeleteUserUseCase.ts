import { PostgresUsersRepository } from './../../../repositores/implementations/PostgresUsersRepository'
export class DeleteUserUseCase {
  constructor(private usersRepository: PostgresUsersRepository) {}

  async execute(id: string) {
    await this.usersRepository.delete(id)
  }
}
