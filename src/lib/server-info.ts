'use server'

import { getVideoDBApiForUserSession } from './getVideoDBApiForUserSession'

interface InfoResult {
  ApiServerVersion: string
}

export async function getServerInfo() {
  const api = await getVideoDBApiForUserSession()

  let info : InfoResult = { ApiServerVersion: '' }

  const response = await api.info.infoIndex()
  console.log('response')
  console.log(response)
  if (response.ok)
  {
    info = response.data as unknown as InfoResult
  }

  return info.ApiServerVersion

}