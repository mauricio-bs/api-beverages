import { IUsersRepository } from './../../../repositores/IUsersRepository'
export class FindOneUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string) {
    const user = await this.usersRepository.findById(id)

    if (user) delete user.password

    return user
  }
}
