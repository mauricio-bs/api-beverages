import { User } from './User'
import { Payment } from './Payment'
import { Beverage } from './Beverage'

import { v4 } from 'uuid'

export class Sale {
  public readonly id: string
  public products: Beverage[]
  public amount: number
  public discountPercentage: number
  public discountValue: number
  public payment: Pick<Payment, 'id'>
  public userId: Pick<User, 'id' | 'email'>
  public date: Date
  public status: string

  constructor(props: Omit<Sale, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
    }
  }
}
