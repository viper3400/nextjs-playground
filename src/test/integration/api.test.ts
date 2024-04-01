// Import the auth function
import { getAuthStateFromApi } from '@/lib/getAuthStateFromApi'
import { getAuthenticatedApi } from '@/lib/getAuthenticatedApi'
import { CollectionWithPagingOfMovieDataResource } from '@/lib/videodb-api'
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

  it('should be able to cancel a request', async () => {
    const authState = await getAuthStateFromApi(credentials, baseUrl)
    expect(authState.authState).toBe('AUTHENTICATED')
    expect(authState.token).toBeDefined()
    const api = await getAuthenticatedApi(authState.token, baseUrl)
    expect(api.baseUrl).toBeDefined()
    const abortControllerA = new AbortController()
    const requestA = await api.moviedata.movieDataGetMovieData(
      { Title: 'Ba', UseInlineCoverImage: true },
      { signal: abortControllerA.signal })
    const json = await requestA.json()
    const resultCollection = json as CollectionWithPagingOfMovieDataResource
    expect(resultCollection.size).toEqual(96)
    const requestB = await api.moviedata.movieDataGetMovieData(
      { Title: 'Die Gras', UseInlineCoverImage: true },
      { signal: abortControllerA.signal })
    const jsonB = await requestB.json()
    const resultCollectionB = jsonB as CollectionWithPagingOfMovieDataResource
    expect(resultCollectionB.size).toEqual(1)
  }, 10_000)
})