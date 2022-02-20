import { IBeverageRepository } from './../../../repositores/IBeveragesRepository'
import { FindManyBeveragesRequestDTO } from './FindManyBeveragesDTO'

export class FindManyBeveragesUseCase {
  constructor(private beveragesRepository: IBeverageRepository) {}

  async execute(params: FindManyBeveragesRequestDTO) {
    const beverages = await this.beveragesRepository.findMany(
      params.categories,
      params.isActive,
      params.name
    )

    return beverages
  }
}
