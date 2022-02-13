import { ICategoriesRepository } from './../../../repositores/ICategoriesRepository'
import { CreateCategoryRequestDTO } from './CreateCategoryDTO'

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute(categoryInfo: CreateCategoryRequestDTO) {
    const { name, imageUrl, isActive } = categoryInfo

    const categoryNameAlreadyExists =
      await this.categoriesRepository.findByName(name)

    if (categoryNameAlreadyExists) {
      throw new Error('Category name already exists, please try another name')
    }

    await this.categoriesRepository.store({ name, imageUrl, isActive })
  }
}
