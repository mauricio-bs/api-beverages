import { IBeverageRepository } from './../../../repositores/IBeveragesRepository'

export class DeleteBeverageUseCase {
  constructor(private beveragesRepository: IBeverageRepository) {}

  async execute(id: string) {
    await this.beveragesRepository.delete(id)
  }
}
