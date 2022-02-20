import { PostgresBeveragesRepository } from './../../../repositores/implementations/PostgresBeveragesRepository'
import { DeleteBeverageController } from './DeleteBeverageController'
import { DeleteBeverageUseCase } from './DeleteBeverageUseCase'

const postgresBeveragesRepository = new PostgresBeveragesRepository()

const deleteBeverageUseCase = new DeleteBeverageUseCase(
  postgresBeveragesRepository
)

const deleteBeverageController = new DeleteBeverageController(
  deleteBeverageUseCase
)

export { deleteBeverageUseCase, deleteBeverageController }
