import { customConfig } from '../../custom-config'

/**
 * The `apiBearerHeader` function generates a security header configuration for
 * API requests with a bearer token. It includes the base URL and a security worker
 * function that adds the Authorization header with the provided token.
 *
 * @param {string} token - The bearer token for authentication.
 * @returns {{ baseUrl: string, securityWorker: () => Record<string, any> | undefined }}
 * An object containing the base URL and a security worker function for API requests.
 *
 * @example
 * ```typescript
 * const token = 'your_access_token_here';
 * const apiHeader = apiBearerHeader(token);
 * const apiUrl = apiHeader.baseUrl + '/endpoint';
 *
 * const requestOptions = {
 *   method: 'GET',
 *   headers: apiHeader.securityWorker(),
 * };
 *
 * try {
 *   const response = await fetch(apiUrl, requestOptions);
 *   const data = await response.json();
 *   console.log(data);
 * } catch (error) {
 *   console.error('Error making API request:', error.message);
 * }
 * ```
 */
export function apiBearerHeader(token: string): { baseUrl: string, securityWorker: () => Record<string, any> | undefined } {
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
