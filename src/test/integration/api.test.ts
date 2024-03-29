// Import the auth function
import { getAuthStateFromApi } from '@/lib/getAuthStateFromApi'
import { getAuthenticatedApi } from '@/lib/getAuthenticatedApi'
import { baseUrl, credentials } from './api.local.settings'


describe('auth', () => {
  it('should return authState when authentication is successful', async () => {
    const authState = await getAuthStateFromApi(credentials, baseUrl)
    expect(authState.authState).toBe('AUTHENTICATED')
    expect(authState.token).toBeDefined()
  })

  it('should return API for authenticated user', async () => {
    const authState = await getAuthStateFromApi(credentials, baseUrl)
    expect(authState.authState).toBe('AUTHENTICATED')
    expect(authState.token).toBeDefined()
    const api = await getAuthenticatedApi(authState.token, baseUrl)
    expect(api.baseUrl).toBeDefined()
    const response = await api.info.infoIndex()
    expect(response.status).toBe(200)
    const expected = JSON.parse('{"ApiServerVersion": "4.0.1.19"}')
    expect(response.data).toEqual(expected)
  })

})