'use server'

import { auth } from '@/auth'
import { customConfig } from '../../custom-config'
import { apiBearerHeader } from './api-bearer-header'
import prisma from './db-session-handling/prisma'
import { Api } from './videodb-api'

/**
 * The `getVideoDBApiForUserSession` function retrieves a VideoDB API instance
 * for the current user session, using authentication and session information.
 *
 * @throws Will throw an error if the user session is not available or if the
 * VideoDB session is not found.
 *
 * @returns {Promise<Api<unknown>>} A promise that resolves to an authenticated instance
 * of the VideoDB API.
 */
export async function getVideoDBApiForUserSession(): Promise<Api<unknown>> {
  // Retrieve the user session information using authentication.
  const session = await auth()

  // Throw an error if the user session is not available.
  if (!session?.user?.name) throw new Error('no session user')

  // Retrieve the VideoDB session information based on the username.
  const videodbSession = await prisma.homeWebSession.findUnique({
    where: {
      username: session?.user?.name
    }
  })

  // Throw an error if the VideoDB session is not found.
  if (!videodbSession) throw new Error('no videodb session')

  // Create a new authenticated API instance with the VideoDB session token.
  const authApi = new Api(apiBearerHeader(videodbSession.token))

  // Set the base URL for the API, using custom configuration or a default error message.
  authApi.baseUrl = customConfig.apiBaseUrl ? customConfig.apiBaseUrl : 'error: base url not set'

  // Set security data for the API instance.
  authApi.setSecurityData({ token: videodbSession.token })

  // Return the authenticated VideoDB API instance.
  return authApi
}
