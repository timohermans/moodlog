import NextAuth, { Session, User } from 'next-auth'
import Providers from 'next-auth/providers'
import { WithAdditionalParams } from "next-auth/_utils";

const baseUrl = `${process.env.REACT_APP_KEYCLOAK_DOMAIN}/auth/realms/${process.env.REACT_APP_KEYCLOAK_REALM}/protocol/openid-connect`;

export default NextAuth({
    useSecureCookies: process.env.USE_HTTPS === "true",
    callbacks: {
        async session(session, token) {
            return Promise.resolve({
                ...session, user: { ...session.user, id: token['sub'] }
            });
        }
    },
    // Configure one or more authentication providers
    providers: [
        {
            id: "keycloak",
            name: "Keycloak",
            type: "oauth",
            version: "2.0",
            params: { grant_type: "authorization_code" },
            scope: "openid profile email",
            async profile(profile, tokens) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture
                }
            },

            clientId: process.env.REACT_APP_KEYCLOAK_CLIENTID,
            domain: process.env.REACT_APP_KEYCLOAK_DOMAIN,
            clientSecret: process.env.REACT_APP_KEYCLOAK_CLIENT_SECRET,
            accessTokenUrl: `${baseUrl}/token`,
            requestTokenUrl: `${baseUrl}/auth`,
            authorizationUrl: `${baseUrl}/auth?response_type=code`,
            profileUrl: `${baseUrl}/userinfo`
        }],
})