'use server'

import { getVideoDBApiForUserSession } from './getVideoDBApiForUserSession'

export async function getMovies (searchValue: string ) {
  console.log('getMovies - search for ' + searchValue)
  const api = await getVideoDBApiForUserSession()

  const response = await api.moviedata.movieDataGetMovieData({ Title: searchValue })
  if (response.ok) {
    const json = await response.json()
    console.log(json)
  }
}