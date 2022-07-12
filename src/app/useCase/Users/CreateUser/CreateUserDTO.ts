export interface ICreateUserRequestDTO {
  name: string
  email: string
  password: string
  confirmPasword: string
  birthDate: string | null
  admin: boolean
  isActive: boolean
}
