export interface ICreateBeverageRequestDTO {
  name: string
  description?: string
  imageUrl?: string
  isActive: boolean
  categories?: Array<number>
}
