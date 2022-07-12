const { execSync } = require('child_process')
const NodeEnvironment = require('jest-environment-node')
const { resolve } = require('path')
const { v4 } = require('uuid')

require('dotenv').config({
  path: resolve(__dirname, '..', '.env.test')
})

const prismaCli = './node_modules/.bin/prisma'

class CustomEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config)
    this.schema = `test_schema_${v4()}`
    this.connectionString = `${process.env.DATABASE_URL}${this.schema}`
  }

  setup() {
    process.env.DATABASE_URL = this.connectionString
    this.global.process.env.DATABASE_URL = this.connectionString

    // Run migrations
    execSync(`${prismaCli} migrate dev`)
  }
}

module.exports = CustomEnvironment
