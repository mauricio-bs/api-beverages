import { User } from './User'
import { PaymentForm } from './PaymentForm'
import { PaymentCondition } from './PaymentCondition'
import { v4 } from 'uuid'

export class Payment {
  public readonly id: string
  public readonly userId: Pick<User, 'id'>
  public amount: number
  public status: string
  public paymentCondition: Pick<PaymentCondition, 'id'>
  public paymentForm: Pick<PaymentForm, 'id'>

  constructor(props: Omit<Payment, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
    }
  }
}
