import { v4 } from 'uuid'

export class Category {
  public id?: string
  public name: string
  public imageUrl?: string

  constructor(props: Omit<Category, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
    }
  }
}
