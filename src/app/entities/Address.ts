import { v4 } from 'uuid'

import { City } from './City'
import { Country } from './Country'
import { State } from './State'

export class Address {
  public readonly id: string
  public zipCode: string
  public country: Country
  public state: State
  public city: City
  public neighborhood: string
  public street: string
  public number: number
  public complement?: string
  public referencePoint?: string

  constructor(props: Omit<Address, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
    }
  }
}
