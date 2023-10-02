// api.js

import { customConfig } from '../../custom-config'

export function apiBearerHeader(token: string) {
  return {
    baseUrl: customConfig.apiBaseUrl || 'error: base URL not set',
    securityWorker: () => {
      console.log('Security Worker was here.')

      if (token) {
        const bearer = 'Bearer ' + token
        console.log(bearer)
        return {
          headers: {
            'Authorization': bearer,
          },
        }
      }
    },
  }
}
