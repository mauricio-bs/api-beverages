import { ICategoriesRepository } from '../../../repositores/ICategoriesRepository'
import { UpdateCategoryRequestDTO } from './UpdateCategoryDTO'

export class UpdateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute(categoryId: number, categoryInfo: UpdateCategoryRequestDTO) {
    const { name, imageUrl, isActive } = categoryInfo

    const categoryNameAlreadyExists =
      await this.categoriesRepository.findByName(name)

    if (categoryNameAlreadyExists.id !== categoryId) {
      throw new Error('Category name already exists, please try another name')
    }

    await this.categoriesRepository.update(categoryId, {
      name,
      imageUrl,
      isActive
    })
  }
}
