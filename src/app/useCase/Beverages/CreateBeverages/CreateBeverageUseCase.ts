import { ICreateBeverageRequestDTO } from './CreateBeverageDTO'
import { IBeverageRepository } from './../../../repositores/IBeveragesRepository'

export class CreateBeverageUseCase {
  constructor(private beveragesRepository: IBeverageRepository) {}

  async execute(beverage: ICreateBeverageRequestDTO) {
    const beverageWthSameName = await this.beveragesRepository.findByName(
      beverage.name
    )

    if (beverageWthSameName.name) {
      throw new Error('Beverage name already registered')
    }

    await this.beveragesRepository.store(beverage)
  }
}
