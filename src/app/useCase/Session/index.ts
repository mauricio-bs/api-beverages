import { SignInUseCase } from './SignInUseCase'
import { SignInController } from './SignInController'
import { PostgresUsersRepository } from './../../repositores/implementations/PostgresUsersRepository'

const postgresUsersRepository = new PostgresUsersRepository()

const signInUseCase = new SignInUseCase(postgresUsersRepository)

const signInController = new SignInController(signInUseCase)

export { signInController, signInUseCase }
