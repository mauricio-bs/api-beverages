export interface ICreateUserRequestDTO {
  id: string
  name: string
  email: string
  password: string
  birthDate: string | null
  admin: boolean
  isActive: boolean
}
