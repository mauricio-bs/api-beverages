import { v4 } from 'uuid'

import { PaymentForm } from './PaymentForm'
import { Payment } from './Payment'

export class PaymentParcel {
  public readonly id: string
  public readonly paymentId: Pick<Payment, 'id'>
  public totalParcels: number
  public currentParcel: number
  public amount: number
  public status: string
  public payDate?: Date
  public dueDate: Date
  public paymentFormId: Pick<PaymentForm, 'id'>

  constructor(props: Omit<PaymentParcel, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
    }
  }
}
