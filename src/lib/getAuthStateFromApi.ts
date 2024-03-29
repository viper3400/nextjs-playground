'use server'
import { LoginCredentials } from './types'
import { AuthenticationState } from './types/AuthenticationState'
import { Api, LoginModel } from './videodb-api'


export async function getAuthStateFromApi(credentials: LoginCredentials, apiBaseUrl: string) {
  const vApi = new Api()
  vApi.baseUrl = apiBaseUrl

  const loginModel: LoginModel = {
    username: credentials.username,
    password: credentials.password,
    group: credentials.group,
  }

  let authState: AuthenticationState = {
    token: '',
    refreshTuple: undefined,
    authState: 'NOT_AUTHENTICATED',
  }

  const response = await vApi.token.tokenCreate(loginModel)


  if (response.ok) {
    const responseJson = await response.json()
    authState = {
      token: responseJson.token,
      refreshTuple: {
        item1: responseJson.refreshTuple.item1,
        item2: responseJson.refreshTuple.item2,
      },
      authState: 'AUTHENTICATED',
    }
  }

  return authState
}
