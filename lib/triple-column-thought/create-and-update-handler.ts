import * as yup from 'yup'
import prisma from 'lib/prisma'
import { schema } from 'lib/triple-column-thought/create-and-update-validator'
export const handle = async (data, userId) => {
  await schema.validate(data, { abortEarly: false })

  await prisma.tripleColumnThought.create({
    data: {
      ...data,
      userId,
    },
  })
}
