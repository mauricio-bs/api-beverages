import { v4 } from 'uuid'

export class Beverage {
  public id?: string
  public name: string
  public description: string | null
  public imageUrl: string | null
  public isActive: boolean
  public price: number
  public stock_quantity?: number
  public categories?: Array<Object>

  constructor(props: Omit<Beverage, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
    }
  }
}
