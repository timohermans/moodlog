import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { KeycloakSession } from 'lib/types/keycloak-session'
import { handle } from 'lib/triple-column-thought/create-and-update-handler'
import { withErrorHandling } from 'lib/middlewares/with-error-handling'

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method === 'GET') return res.status(405)

  const session = (await getSession({ req })) as KeycloakSession

  await handle(req.body, session.user.id)

  res.status(200).end()
}

export default withErrorHandling(handler)
