import { FindOneBeveragesUseCase } from '../FindOneBeverage/FindoneBeverageUseCase'
import { FindOneBeverageController } from './../FindOneBeverage/FindoneBeverageController'
import { PostgresBeveragesRepository } from './../../../repositores/implementations/PostgresBeveragesRepository'

const postgresBeverageRepository = new PostgresBeveragesRepository()

const findOneBeveragesUseCase = new FindOneBeveragesUseCase(
  postgresBeverageRepository
)

const findOneBeverageController = new FindOneBeverageController(
  findOneBeveragesUseCase
)

export { findOneBeveragesUseCase, findOneBeverageController }
