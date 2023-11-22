'use server'

import { customConfig } from '../../custom-config'
import { apiBearerHeader } from './api-bearer-header'
import { saveOrUpdateDbSession } from './db-session-handling/saveOrUpdateSession'

import { LoginCredentials } from './types'
import { AuthenticationState } from './types/AuthenticationState'
import { Api, LoginModel } from './videodb-api'


export const getApiToken = async (credentials: LoginCredentials) : Promise<AuthenticationState>  => {

  const vApi = new Api()
  vApi.baseUrl = customConfig.apiBaseUrl? customConfig.apiBaseUrl : 'error: base url not set'
  const loginModel : LoginModel = {
    username: credentials.username,
    password: credentials.password,
    group: credentials.group
  }
  const response = await vApi.token.tokenCreate(loginModel)

  let authState: AuthenticationState = {
    token: '',
    refreshTuple: undefined,
    authState: 'NOT_AUTHENTICATED'
  }

  if (response.ok) {
    const responseJson = await response.json()
    authState = {
      token: responseJson.token,
      refreshTuple: {
        item1: responseJson.refreshTuple.item1,
        item2: responseJson.refreshTuple.item2
      },
      authState: 'AUTHENTICATED'
    }

    const authApi = new Api(apiBearerHeader(responseJson.token))

    await saveOrUpdateDbSession(credentials.username, authState)
    authApi.setSecurityData({ token: responseJson.token })

    let info
    try {
      info =  await authApi.info.infoIndex()
    }
    catch (e) {
      console.log('y')
      console.log(e)
    }
  }

  return authState
}