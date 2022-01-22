import multer from 'multer'
import { extname, resolve } from 'path'
import { v4 } from 'uuid'

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'uploads'),
    filename: (req, file, callback) => {
      return callback(null, v4() + extname(file.originalname))
    }
  })
}
