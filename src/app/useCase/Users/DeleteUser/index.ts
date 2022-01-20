import { PostgresUsersRepository } from './../../../repositores/implementations/PostgresUsersRepository'
import { DeleteUserController } from './DeleteUserController'
import { DeleteUserUseCase } from './DeleteUserUseCase'

const postgresUserRepository = new PostgresUsersRepository()

const deleteUserUseCase = new DeleteUserUseCase(postgresUserRepository)

const deleteUserController = new DeleteUserController(deleteUserUseCase)

export { deleteUserUseCase, deleteUserController }
