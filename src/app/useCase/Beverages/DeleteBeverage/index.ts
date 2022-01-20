import { PostgresBeveragesRepository } from './../../../repositores/implementations/PostgresBeveragesRepository'
import { DeleteBeverageUseCase } from './DeleteBeverageUseCase'
import { DeleteBeverageController } from './DeleteBeverageController'

const postgresBeveragesRepository = new PostgresBeveragesRepository()

const deleteBeverageUseCase = new DeleteBeverageUseCase(
  postgresBeveragesRepository
)

const deleteBeverageController = new DeleteBeverageController(
  deleteBeverageUseCase
)

export { deleteBeverageUseCase, deleteBeverageController }
