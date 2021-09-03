import Sequelize from 'sequelize'
import dbConfiguration from '../config/database'

import Beverage from '../app/model/Beverage'

const models = [Beverage]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(dbConfiguration)
    models
      .map((model) => model.init(this.connection))
      .map((model) => model.init(this.connection.models))
  }
}

export default new Database()
