import { ICategoriesRepository } from '../../../repositores/ICategoriesRepository'
import { UpdateCategoryRequestDTO } from './UpdateCategoryDTO'

export class UpdateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute(categoryInfo: UpdateCategoryRequestDTO) {
    const { name, imageUrl, isActive, categoryId } = categoryInfo

    const categoryNameAlreadyExists =
      await this.categoriesRepository.findByName(name)

    if (categoryNameAlreadyExists.id !== Number(categoryId)) {
      throw new Error('Category name already exists, please try another name')
    }

    await this.categoriesRepository.update(categoryId, {
      name,
      imageUrl,
      isActive
    })
  }
}
