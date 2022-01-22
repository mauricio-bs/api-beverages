export class Category {
  public readonly id: number
  public name: string
  public imageUrl: string | null

  constructor(props: Omit<Category, 'id'>, id?: string) {
    Object.assign(this, props)
  }
}
