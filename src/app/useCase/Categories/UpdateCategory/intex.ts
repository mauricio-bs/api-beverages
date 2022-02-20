import { PostgresCategoriesRepository } from './../../../repositores/implementations/PostgresCategoriesRepository'
import { UpdateCategoryController } from './UpdateCategoryController'
import { UpdateCategoryUseCase } from './UpdateCategoryUseCase'

const postgresCategory = new PostgresCategoriesRepository()

const updateCategoryUseCase = new UpdateCategoryUseCase(postgresCategory)

const updateCategoryController = new UpdateCategoryController(
  updateCategoryUseCase
)

export { updateCategoryController, updateCategoryUseCase }
