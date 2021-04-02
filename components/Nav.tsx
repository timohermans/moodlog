import { useKeycloak } from '@react-keycloak/ssr'
import { KeycloakInstance } from 'keycloak-js'
import React, { ReactElement } from 'react'

interface Props {}

function Nav({}: Props): ReactElement {
  const { keycloak } = useKeycloak<KeycloakInstance>()

  return (
    <div>
      {keycloak.authenticated ? (
        <span>hello, mister</span>
      ) : (
        <button id="login" onClick={() => keycloak.login()}>
          Login
        </button>
      )}
    </div>
  )
}

export default Nav
