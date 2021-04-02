import "../styles/globals.css";
import cookie from "cookie";
import type { AppProps, AppContext } from "next/app";
import type { IncomingMessage } from "http";
import React from "react";

import { Cookies, SSRCookies, SSRKeycloakProvider } from "@react-keycloak/ssr";

const keycloakConfig = {
  url: "https://auth.timohermans.nl/auth",
  realm: "moodlog",
  clientId: "applocal",
};

interface InitialProps {
  cookies: Cookies;
}

function MyApp({ Component, pageProps, cookies }: AppProps & InitialProps) {
  return (
    <SSRKeycloakProvider
      keycloakConfig={keycloakConfig}
      persistor={SSRCookies(cookies)}
    >
      <Component {...pageProps} />
    </SSRKeycloakProvider>
  );
}

function parseCookies(req?: IncomingMessage) {
  if (!req || !req.headers) {
    return {};
  }

  return cookie.parse(req.headers.cookie || "");
}

MyApp.getInitialProps = async (context: AppContext) => {
  return {
    cookies: parseCookies(context?.ctx?.req),
  };
};

export default MyApp;
