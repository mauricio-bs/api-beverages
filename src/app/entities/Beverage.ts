import { v4 } from 'uuid'
import { Category } from './Category'

export class Beverage {
  public id?: string
  public name: string
  public description?: string
  public imageUrl?: string
  public isActive: boolean
  public categories?: Category[]

  constructor(props: Omit<Beverage, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
    }
  }
}
