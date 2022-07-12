export interface IUpdateUserRequestDTO {
  userId: string
  name: string
  email: string
  password: string
  confirmPassword: string
  birthDate: string | null
  admin: boolean
  isActive: boolean
}
