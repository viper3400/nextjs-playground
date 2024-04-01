'use server'

import { customConfig } from '../../custom-config'

export const fetchMovies = async (searchValue: string) => {
  console.log('fetchMovies - for ' + searchValue)
  const api = await customConfig.authenticatedApi()
  let json = '{}'
  try {
    console.log('fetchMovies - fetching ...')
    const abortController = new AbortController()
    const response = await api.moviedata.movieDataGetMovieData(
      { Title: searchValue, UseInlineCoverImage: true },
      { signal: abortController.signal })
    console.log('fetchMovies - fetched.')
    console.log(response.ok)
    if (response.ok) json = await response.json()
    console.log(json)
  }
  catch(e: any) {
    console.error(e)
    if (e.status == 401) json = e.statusText
  }


  return JSON.stringify(json)
}