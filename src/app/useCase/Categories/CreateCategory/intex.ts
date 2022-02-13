import { PostgresCategoriesRepository } from './../../../repositores/implementations/PostgresCategoriesRepository'
import { CreateCategoryController } from './CreateCategoryController'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

const postgresCategory = new PostgresCategoriesRepository()

const createCategoryUseCase = new CreateCategoryUseCase(postgresCategory)

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
)

export { createCategoryController, createCategoryUseCase }
