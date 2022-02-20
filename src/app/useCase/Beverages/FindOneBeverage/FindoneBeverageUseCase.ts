import { PostgresBeveragesRepository } from '../../../repositores/implementations/PostgresBeveragesRepository'

export class FindOneBeveragesUseCase {
  constructor(private beveragesRepository: PostgresBeveragesRepository) {}

  async execute(beverageId: string) {
    const beverages = await this.beveragesRepository.findById(beverageId)

    return beverages
  }
}
