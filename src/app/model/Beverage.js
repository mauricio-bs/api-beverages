import Sequelize, { Model } from 'sequelize'

class Beverage extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        image_url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `https://localhost:3000/product-file/${this.path}`
          },
        },
      },
      {
        sequelize,
      }
    )
    return this
  }
}

export default Beverage
