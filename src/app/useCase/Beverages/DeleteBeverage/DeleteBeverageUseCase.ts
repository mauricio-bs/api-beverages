import { IBeverageRepository } from './../../../repositores/IBeveragesRepository'

export class DeleteBeverageUseCase {
  constructor(private beveragesRepository: IBeverageRepository) {}

  async execute(id: string) {
    const beverageExists = await this.beveragesRepository.findById(id)
    if (!beverageExists) {
      throw new Error('Beverage id not found')
    }

    await this.beveragesRepository.delete(id)
  }
}
