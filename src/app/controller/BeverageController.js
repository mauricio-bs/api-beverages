import Beverages from '../model/Beverage'
import beverageValidation from '../../validation/beveragesValidation'

class BeverageController {
  async index(req, res) {
    try {
      const drinks = await Beverages.findAll()
      return res.status(200).json(drinks)
    } catch (err) {
      return res.status(500).json({ error: 'Internal server error' })
    }
  }

  async show(req, res) {
    const { id } = req.params

    try {
      const bev = await Beverages.findByPk(id)

      if (!bev) throw new Error()

      return res.status(200).json(bev)
    } catch (err) {
      return res.status(400).json({ error: 'Beverage not found' })
    }
  }

  async store(req, res) {
    try {
      await beverageValidation.isValid(req.body)
    } catch (err) {
      return res.status(400).json({ error: 'Validation fail' })
    }

    const { filename: path } = req.file
    const { name, description } = req.body

    try {
      await Beverages.create({
        name,
        description,
        path,
      })
    } catch (err) {
      return res.status(500).json({ error: 'Fail to register beverege' })
    }
    return res.status(201).json({ success: 'Beverage created successfully' })
  }

  async update(req, res) {
    try {
      await beverageValidation.isValid(req.body)
    } catch (err) {
      return res.status(400).json({ error: 'Validation fail' })
    }
    const { id } = req.params
    let { name, description } = req.body

    const bev = await Beverages.findByPk(id)

    if (!name) name = bev.name
    if (!description) description = bev.description

    try {
      await Beverages.update({ name, description }, { where: { id } })
    } catch (err) {
      return res.status(500).json({ error: 'Fail to update informations' })
    }

    return res
      .status(201)
      .json({ success: 'Beverage informations was updated' })
  }

  async delete(req, res) {
    const { id } = req.params

    try {
      await Beverages.destroy({ where: { id } })
    } catch (err) {
      return res.status(500).json({ error: 'Fail to delete item' })
    }

    return res.status(204).json()
  }
}

export default new BeverageController()
