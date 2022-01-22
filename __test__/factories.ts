import { factory } from 'factory-girl'

import { Category } from './../src/app/entities/Category'

factory.define('Category', Category, {
  name: 'hot',
  imageUrl: 'http://imageurls/test01'
})

export { factory }
