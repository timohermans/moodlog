import { getSession } from "next-auth/client"

export const guardAuthenticated = async (req, res) => {
    const session = await getSession({ req });

    if (!session && res) {
        res.writeHead(302, { Location: '/' })
        res.end()
        return false
    }

    return true;
}