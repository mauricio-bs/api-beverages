import { Country } from './Country'
export class State {
  public readonly id?: number
  public name: string
  public country: Country

  constructor(props: Omit<State, 'id'>, id?: number) {
    Object.assign(this, props)
  }
}
