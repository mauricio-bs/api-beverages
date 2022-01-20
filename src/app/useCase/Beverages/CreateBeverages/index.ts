import { PostgresBeveragesRepository } from './../../../repositores/implementations/PostgresBeveragesRepository'
import { CreateBeverageController } from './CreateBeverageController'
import { CreateBeverageUseCase } from './CreateBeverageUseCase'

const postgresBeveragesRepositories = new PostgresBeveragesRepository()

const createBeverageUseCase = new CreateBeverageUseCase(
  postgresBeveragesRepositories
)

const createBeverageController = new CreateBeverageController(
  createBeverageUseCase
)

export { createBeverageController, createBeverageUseCase }
