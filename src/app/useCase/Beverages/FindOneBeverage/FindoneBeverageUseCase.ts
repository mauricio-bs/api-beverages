import { PostgresBeverageRepository } from '../../../repositores/implementations/PostgresBeveragesRepository'

export class FindOneBeveragesUseCase {
  constructor(private beveragesRepository: PostgresBeverageRepository) {}

  async execute(id: string) {
    const beverages = await this.beveragesRepository.findById(id)

    return beverages
  }
}
