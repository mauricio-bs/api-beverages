export class PaymentForm {
  public readonly id: number
  public description: string
  public isActive: boolean

  constructor(props: Omit<PaymentForm, 'id'>, id?: number) {
    Object.assign(this, props)
  }
}
