import { PostgresBeveragesRepository } from '../../../repositores/implementations/PostgresBeveragesRepository'

export class FindOneBeveragesUseCase {
  constructor(private beveragesRepository: PostgresBeveragesRepository) {}

  async execute(id: string) {
    const beverages = await this.beveragesRepository.findById(id)

    return beverages
  }
}
