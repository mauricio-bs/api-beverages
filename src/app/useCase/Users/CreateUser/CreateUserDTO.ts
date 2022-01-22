export interface ICreateUserRequestDTO {
  name: string
  email: string
  password: string
  birthDate: string | null
  admin: boolean
  isActive: boolean
}
