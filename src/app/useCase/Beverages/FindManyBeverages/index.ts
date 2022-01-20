import { PostgresBeveragesRepository } from './../../../repositores/implementations/PostgresBeveragesRepository'
import { FindManyBeveragesController } from './FindManyBeveragesController'
import { FindManyBeveragesUseCase } from './FindManyBeveragesUseCase'

const postgresBeverageRepository = new PostgresBeveragesRepository()

const findManyBeveragesUseCase = new FindManyBeveragesUseCase(
  postgresBeverageRepository
)

const findManyBeverageController = new FindManyBeveragesController(
  findManyBeveragesUseCase
)

export { findManyBeveragesUseCase, findManyBeverageController }
