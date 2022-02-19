export interface IUpdateUserRequestDTO {
  userId: string
  name: string
  email: string
  password: string
  birthDate: string | null
  admin: boolean
  isActive: boolean
}
