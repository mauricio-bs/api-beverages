import cloudinary from 'cloudinary'
import multer from 'multer'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import { v4 } from 'uuid'

const cloudStorage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: async (req, file) => {
    return {
      folder: 'coffe_beverages',
      public_id: v4(),
      limits: { fileSize: 5120 * 5120 }, // File max size

      fileFilter: (
        req: any,
        file: { mimetype: string },
        cb: (arg0: Error | null, arg1?: boolean) => any
      ) => {
        const allowMimes = ['image/jpeg', 'image/png']

        // Verify file mime type
        allowMimes.includes(file.mimetype)
          ? cb(null, true)
          : cb(new Error('Invalid file type'))
      }
    }
  }
})

export default multer({ storage: cloudStorage })
