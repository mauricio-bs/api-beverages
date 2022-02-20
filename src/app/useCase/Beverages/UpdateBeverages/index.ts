import { PostgresBeveragesRepository } from './../../../repositores/implementations/PostgresBeveragesRepository'
import { UpdateBeverageController } from './UpdateBeverageController'
import { UpdateBeverageUseCase } from './UpdateBeverageUseCase'

const postgresBeveragesRepositories = new PostgresBeveragesRepository()

const updateBeverageUseCase = new UpdateBeverageUseCase(
  postgresBeveragesRepositories
)

const updateBeverageController = new UpdateBeverageController(
  updateBeverageUseCase
)

export { updateBeverageController, updateBeverageUseCase }
