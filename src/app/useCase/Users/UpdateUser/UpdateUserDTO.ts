export interface ICreateUserRequestDTO {
  id: string
  name: string
  email: string
  password: string
  birthDate: string | Date
  admin: boolean
  isActive: boolean
}
