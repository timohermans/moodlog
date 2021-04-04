import '../styles/globals.css'
import type { AppProps, AppContext } from 'next/app'
import React from 'react'

import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
