import { IBeverageRepository } from './../../../repositores/IBeveragesRepository'
import { ICategoriesRepository } from './../../../repositores/ICategoriesRepository'
import { FindManyBeveragesRequestDTO } from './FindManyBeveragesDTO'

export class FindManyBeveragesUseCase {
  constructor(
    private beveragesRepository: IBeverageRepository,
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute(params: FindManyBeveragesRequestDTO) {
    // To-do: find all categories and filter categories id that not exists

    const beverages = await this.beveragesRepository.findMany(
      params.categories,
      params.isActive,
      params.name
    )

    return beverages
  }
}
