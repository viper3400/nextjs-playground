import { NextRequest } from 'next/server'
import { customConfig } from '../../../../custom-config'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')
  const signal = request.signal

  console.log('fetchMovies - for ' + query)
  const api = await customConfig.authenticatedApi()
  let json = '{}'
  try {
    console.log('fetchMovies - fetching ...' + query)
    const response = await api.moviedata.movieDataGetMovieData(
      { Title: query, UseInlineCoverImage: false, Limit: 11 },
      { signal: signal })
    console.log('signal aborted: ' + signal.aborted)
    console.log('fetchMovies - fetched ' + query)
    console.log(response.ok)
    if (response.ok) json = await response.json()
  }
  catch(e: any) {
    console.error(e)
    if (e.status == 401) json = e.statusText
  }


  return Response.json(json)

}