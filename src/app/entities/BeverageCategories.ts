export class BeverageCategories {
  public readonly id?: number
  public beverageId: string
  public categoryId: number

  constructor(props: Omit<BeverageCategories, 'id'>, id?: string) {
    Object.assign(this, props)
  }
}
