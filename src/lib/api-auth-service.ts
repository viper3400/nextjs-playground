'use server'

import { customConfig } from '../../custom-config'
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

    const config = {
      baseUrl: customConfig.apiBaseUrl,
      securityWorker: ( token: any | null ) => {
        console.log('Security Worker was here.')

        if (token) {
          var bearer = 'Bearer ' + token.token
          console.log(bearer)
          return {
            headers: {
              'Authorization': bearer
            }
          }
        }
      }
    }

    const authApi = new Api(config)

    authApi.setSecurityData({ token: responseJson.token })

    let info
    try {
      console.log('try info')
      info =  await authApi.info.infoIndex()
      console.log('info')
      console.log(info.data)
    }
    catch (e) {
      console.log('y')
      console.log(e)
    }
  }

  return authState
}