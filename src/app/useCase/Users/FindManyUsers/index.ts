import { PostgresUsersRepository } from './../../../repositores/implementations/PostgresUsersRepository'
import { FindManyUsersController } from './FindManyUsersController'
import { FindManyUsersUseCase } from './FindManyUsersUseCase'

const postgresUsersRepository = new PostgresUsersRepository()

const findManyUsersUseCase = new FindManyUsersUseCase(postgresUsersRepository)

const findManyUsersController = new FindManyUsersController(
  findManyUsersUseCase
)

export { findManyUsersUseCase, findManyUsersController }
