import { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma"
import { getSession } from "next-auth/client";
import { KeycloakSession } from "../../../lib/types/keycloak-session";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') return res.status(405);

    const session = await getSession({ req }) as KeycloakSession;

    const formData = req.body;

    await prisma.tripleColumnThought.create({
        data: {
            automaticThought: formData.automaticThought,
            cognitiveDistortion: formData.cognitiveDistortion,
            rationaleResponse: formData.rationaleResponse,
            userId: session.user.id
        }
    })
    res.status(200).end()
}