import { factory } from 'factory-girl'

import { Category } from './../src/app/entities/Category'
import { User } from './../src/app/entities/User'

factory.define('Category', Category, {
  name: 'hot',
  imageUrl: 'http://imageurls/test01'
})

factory.define('User', User, {
  name: 'test user',
  email: 'test@mail.com',
  password: 'somepassword2test',
  admin: false,
  isActive: true
})

export { factory }
