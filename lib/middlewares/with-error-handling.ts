import { NextApiRequest, NextApiResponse } from 'next'
import { ValidationError } from 'yup'
import handleError from '../utils/error-handler'

export const withErrorHandling = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse<any>) => {
    try {
      await handler(req, res)
    } catch (error) {
      handleError(error)

      if (error instanceof ValidationError) {
        res.status(400).json({
          message: 'request is not valid.',
          errors: error.errors,
        })
      }

      // handle, instead of throw
      throw error
    }
  }
}
