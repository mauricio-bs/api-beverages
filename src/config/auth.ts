import 'dotenv/config'

interface IAuth {
  secret: string
  expiresIn: string
}

const authParams: IAuth = {
  secret: process.env.SECRET || 'secret',
  expiresIn: '3d'
}

export default authParams
