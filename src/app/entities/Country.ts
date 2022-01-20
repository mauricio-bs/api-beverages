export class Country {
  public readonly id?: number
  public name: string
  public code: number

  constructor(props: Omit<Country, 'id'>, id?: number) {
    Object.assign(this, props)
  }
}
