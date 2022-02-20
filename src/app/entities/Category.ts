export class Category {
  public readonly id?: number
  public name: string
  public imageUrl: string | null
  public isActive: boolean

  constructor(props: Omit<Category, 'id'>, id?: string) {
    Object.assign(this, props)
  }
}
