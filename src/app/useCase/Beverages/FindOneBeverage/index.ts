import { FindOneBeveragesUseCase } from '../FindOneBeverage/FindoneBeverageUseCase'
import { PostgresBeveragesRepository } from './../../../repositores/implementations/PostgresBeveragesRepository'
import { FindOneBeverageController } from './../FindOneBeverage/FindoneBeverageController'

const postgresBeverageRepository = new PostgresBeveragesRepository()

const findOneBeveragesUseCase = new FindOneBeveragesUseCase(
  postgresBeverageRepository
)

const findOneBeverageController = new FindOneBeverageController(
  findOneBeveragesUseCase
)

export { findOneBeveragesUseCase, findOneBeverageController }
