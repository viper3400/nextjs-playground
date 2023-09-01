'use server'

import { customConfig } from '../../custom-config'
import { LoginCredentials } from './types'
import { AuthenticationState } from './types/AuthenticationState'
import { Api, ApiConfig, LoginModel, RequestParams } from './videodb-api'

const apiUrl = customConfig.apiBaseUrl

const vApi = new Api()
vApi.baseUrl = customConfig.apiBaseUrl? customConfig.apiBaseUrl : 'error'

export async function getToken(credentials : LoginCredentials) {
  const loginModel : LoginModel = {
    username: credentials.username,
    password: credentials.password,
    group: credentials.group
  }
  const response = await vApi.token.tokenCreate(loginModel)
  /*const url = `${apiUrl}/token`
  const response = await fetch (url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })*/

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
      baseUrl: customConfig.apiBaseUrl? customConfig.apiBaseUrl : 'error',
      securityWorker: ( token: any ) => {
        console.log('Security Worker was here.')
        console.log(`Bearer ${responseJson.token}`)
        return {
          headers: {
            Authorization: `Bearer ${token} `
          }
        }
      }
    }

    const authApi = new Api(config)



    try {
      const info =  await authApi.info.infoIndex({ secure: true })
      console.log('info')
      console.log(info)
    }
    catch (e) {
      console.log('y')
      console.log(e)
    }
  }

  return authState
}