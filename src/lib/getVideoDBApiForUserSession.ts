'use server'

import { auth } from '@/auth'
import { customConfig } from '../../custom-config'
import prisma from './db-session-handling/prisma'
import { getAuthenticatedApi } from './getAuthenticatedApi'


export async function getVideoDBApiForUserSession() {
  const apiBaseUrl = customConfig.apiBaseUrl ? customConfig.apiBaseUrl : 'Error: Base Url not set'
  const session = await getDbUserSession()
  const api = getAuthenticatedApi(session.videodbSession.token, apiBaseUrl)
  return api
}
async function getDbUserSession()
: Promise<{
  videodbSession: {
    id: string,
    username: string,
    token: string,
    refresh1: string,
    refresh2: string
  }
}>{
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

  return  { videodbSession }
  // Create a new authenticated API instance with the VideoDB session token.
  //return getAuthenticatedApi(videodbSession)
}

