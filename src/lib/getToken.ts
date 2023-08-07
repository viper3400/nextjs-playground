'use server'

import { customConfig } from '../../custom-config'
import { LoginCredentials } from './types'
import { AuthenticationState } from './types/AuthenticationState'

const apiUrl = customConfig.apiBaseUrl

export async function getToken(credentials : LoginCredentials) {
  const url = `${apiUrl}/token`
  const response = await fetch (url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })

  let authState: AuthenticationState = {
    token: '',
    refreshTuple: '',
    authState: 'NOT_AUTHENTICATED'
  }

  if (response.ok) {
    const responseJson = await response.json()
    authState = {
      token: responseJson.token,
      refreshTuple: responseJson.refreshTuple,
      authState: 'AUTHENTICATED'
    }
  }

  return authState
}