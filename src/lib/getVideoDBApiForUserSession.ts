'use server'

import { auth } from '@/auth'
import { customConfig } from '../../custom-config'
import { apiBearerHeader } from './api-bearer-header'
import prisma from './db-session-handling/prisma'
import { Api } from './videodb-api'

export async function getVideoDBApiForUserSession() {
  const session = await auth()
  if (!session?.user?.name) throw new Error('no session user')
  const videodbSession = await prisma.homeWebSession.findUnique({
    where: {
      username: session?.user?.name
    }
  })
  if(!videodbSession)  throw new Error('no videodb session')

  const authApi = new Api(apiBearerHeader(videodbSession.token))
  authApi.baseUrl = customConfig.apiBaseUrl? customConfig.apiBaseUrl : 'error: base url not set'


  authApi.setSecurityData({ token: videodbSession.token })
  return authApi
}