export interface ICreateBeverageRequestDTO {
  name: string
  description: string | null
  imageUrl: string | null
  isActive: boolean
  price: number
  stock_quantity: number
  categories?: Array<number>
}
