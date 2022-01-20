export interface ICreateUserRequestDTO {
  name: string
  email: string
  password: string
  birthDate: string | Date
  admin: boolean
  isActive: boolean
}
