import { app } from './app'
require('dotenv/config')

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
  console.log('environment: ', process.env.NODE_ENV)
})
