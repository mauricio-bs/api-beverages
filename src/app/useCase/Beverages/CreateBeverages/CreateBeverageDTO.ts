import { Category } from '../../../entities/Category'

export interface ICreateBeverageRequestDTO {
  id?: string
  name: string
  description?: string
  imageUrl?: string
  isActive: boolean
  categories?: Category[]
}
