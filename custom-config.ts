import { getApiToken } from '@/lib/api-auth-service'
import { getVideoDBApiForUserSession } from '@/lib/getVideoDBApiForUserSession'
import { CustomConfig } from '@/lib/types/CustomConfig'

export const customConfig : CustomConfig = {
  apiBaseUrl: process.env.VIDEODB_WEB_API_URL || '',
  viewgroup: process.env.DEFAULT_VIEWGROUP || '',
  authService: getApiToken,
  authenticatedApi: getVideoDBApiForUserSession
}