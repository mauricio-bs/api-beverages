import { PostgresUsersRepository } from './../../repositores/implementations/PostgresUsersRepository'
import { SignInController } from './SignInController'
import { SignInUseCase } from './SignInUseCase'

const postgresUsersRepository = new PostgresUsersRepository()

const signInUseCase = new SignInUseCase(postgresUsersRepository)

const signInController = new SignInController(signInUseCase)

export { signInController, signInUseCase }
