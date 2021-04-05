import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const baseUrl = `https://${process.env.REACT_APP_KEYCLOAK_DOMAIN}/auth/realms/${process.env.REACT_APP_KEYCLOAK_REALM}/protocol/openid-connect`;

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        {
            id: "keycloak",
            name: "Keycloak",
            type: "oauth",
            version: "2.0",
            params: { grant_type: "authorization_code" },
            scope: "openid profile email",
            profile: (profile) => ({ ...profile, id: profile.sub }),
            clientId: process.env.REACT_APP_KEYCLOAK_CLIENTID,
            domain: process.env.REACT_APP_KEYCLOAK_DOMAIN,
            clientSecret: undefined,
            accessTokenUrl: `${baseUrl}/token`,
            requestTokenUrl: `${baseUrl}/auth`,
            authorizationUrl: `${baseUrl}/auth?response_type=code`,
            profileUrl: `${baseUrl}/userinfo`
        }],
})