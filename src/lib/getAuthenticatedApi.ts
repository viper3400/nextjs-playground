'use server'
import { apiBearerHeader } from './api-bearer-header'
import { Api } from './videodb-api'

export async function getAuthenticatedApi(token: string, apiBaseUrl: string) {
  const authApi = new Api(apiBearerHeader(token))

  // Set security data for the API instance.
  authApi.setSecurityData({ token: token })

  // Set the base URL for the API, using custom configuration or a default error message.
  authApi.baseUrl = apiBaseUrl

  // Return the authenticated VideoDB API instance.
  return authApi
}
