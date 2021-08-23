import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    image_url: yup.string().url().required()
})

export default schema