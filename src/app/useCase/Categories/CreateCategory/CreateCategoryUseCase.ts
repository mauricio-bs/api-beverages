import { ICategoriesRepository } from './../../../repositores/ICategoriesRepository'
import { CreateCategoryRequestDTO } from './CreateCategoryDTO'

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute(categoryInfo: CreateCategoryRequestDTO) {
    const { name, imageUrl } = categoryInfo

    const nameAlreadyExists = await this.categoriesRepository.findByName(name)

    if (nameAlreadyExists) {
      throw new Error('Category name already exists, please try another name')
    }

    await this.categoriesRepository.store(name, imageUrl)
  }
}
