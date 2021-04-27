import * as yup from 'yup'
import { TripleColumnThoughtInput } from './create-and-update-type'

export const schema: yup.SchemaOf<TripleColumnThoughtInput> = yup.object({
  automaticThought: yup.string().required(),
  cognitiveDistortion: yup.string().required(),
  rationaleResponse: yup.string().required(),
})
