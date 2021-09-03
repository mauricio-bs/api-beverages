import User from '../model/User'
import userValidation from '../../validation/userValidation'

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll()
      return res.status(200).json(users)
    } catch (err) {
      return res.status(500).json({ error: err })
    }
  }

  async show(req, res) {
    if (!req.params) res.status(400).json({ error: 'Id not passed' })

    const { id } = req.params
    try {
      const user = await User.findByPk({ id })

      if (!user) throw new Error('User not found')

      return res.status(200).json(user)
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }

  async store(req, res) {
    const user = req.body

    try {
      await userValidation.validateSync(req.body)
    } catch (err) {
      return res.status(400).json({ error: 'Validation failed' })
    }

    const emailExists = await User.findOne({ where: { email: user.email } })
    if (emailExists) res.status(400).json({ error: 'Email already registered' })

    try {
      await User.create(user)
    } catch (err) {
      return res.status(500).json({ error: err })
    }

    return res.status(201).json({ success: 'User created' })
  }

  async delete(req, res) {
    const { id } = req.params

    try {
      const user = await User.findByPk(id)
      if (!user) throw new Error('User not found')

      await User.destroy({ where: { id } })
    } catch (err) {
      return res.json({ error: err.message })
    }

    return res.status(204).json()
  }
}

export default new UserController()
