import { PostgresUsersRepository } from './../../../repositores/implementations/PostgresUsersRepository'
import { FindOneUserController } from './FindOneUserController'
import { FindOneUserUseCase } from './FindOneUserUseCase'

const postgresUsersRepository = new PostgresUsersRepository()

const findOneUserUseCase = new FindOneUserUseCase(postgresUsersRepository)

const findOneUserController = new FindOneUserController(findOneUserUseCase)

export { findOneUserController, findOneUserUseCase }
