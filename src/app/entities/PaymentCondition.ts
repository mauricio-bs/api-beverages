export class PaymentCondition {
  public readonly id: number
  public description: string
  public parcels: number
  public isActive: boolean

  constructor(props: Omit<PaymentCondition, 'id'>, id?: string) {
    Object.assign(this, props)
  }
}
