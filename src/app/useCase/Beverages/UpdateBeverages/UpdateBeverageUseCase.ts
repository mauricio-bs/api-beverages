import { IBeverageRepository } from '../../../repositores/IBeveragesRepository'
import { IUpdateBeverageRequestDTO } from './UpdateBeverageDTO'

export class UpdateBeverageUseCase {
  constructor(private beveragesRepository: IBeverageRepository) {}

  async execute(id: string, beverage: IUpdateBeverageRequestDTO) {
    const beverageWthSameName = await this.beveragesRepository.findByName(
      beverage.name
    )

    if (beverageWthSameName.id !== id) {
      throw new Error('Beverage name already registered')
    }

    await this.beveragesRepository.store(beverage)
  }
}
