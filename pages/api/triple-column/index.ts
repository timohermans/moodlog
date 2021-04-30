import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'
import { getSession } from 'next-auth/client'
import { KeycloakSession } from 'lib/types/keycloak-session'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = (await getSession({ req })) as KeycloakSession

  const thoughts = await prisma.tripleColumnThought.findMany({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  res.status(200).json(thoughts)
}
