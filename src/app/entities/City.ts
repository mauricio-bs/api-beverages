import { State } from './State'

export class City {
  public readonly id?: number
  public name: string
  public state: State

  constructor(props: Omit<City, 'id'>, id?: string) {
    Object.assign(this, props)
  }
}
