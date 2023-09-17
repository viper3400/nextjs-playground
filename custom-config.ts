import { getApiToken } from '@/lib/api-auth-service'

export const customConfig = {
  apiBaseUrl: process.env.VIDEODB_WEB_API_URL,
  authService: getApiToken
}