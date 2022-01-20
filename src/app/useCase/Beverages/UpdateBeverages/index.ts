import { PostgresBeverageRepository } from './../../../repositores/implementations/PostgresBeveragesRepository'
import { UpdateBeverageController } from './UpdateBeverageController'
import { UpdateBeverageUseCase } from './UpdateBeverageUseCase'

const postgresBeveragesRepositories = new PostgresBeverageRepository()

const updateBeverageUseCase = new UpdateBeverageUseCase(
  postgresBeveragesRepositories
)

const updateBeverageController = new UpdateBeverageController(
  updateBeverageUseCase
)

export { updateBeverageController, updateBeverageUseCase }
