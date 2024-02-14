'use server'

import { getVideoDBApiForUserSession } from './getVideoDBApiForUserSession'
import { CollectionWithPagingOfMovieDataResource, MovieDataResource } from './videodb-api'

interface GetMoviesResult {
  collection: CollectionWithPagingOfMovieDataResource
  responseStatus: number
}

export async function getMovies (searchValue: string )
        : Promise<GetMoviesResult> {
  console.log('getMovies - search for ' + searchValue)
  const api = await getVideoDBApiForUserSession()
  let resultCollection : CollectionWithPagingOfMovieDataResource = {}
  let responseStatus: number
  try {
    const response = await api.moviedata.movieDataGetMovieData({ Title: searchValue, UseInlineCoverImage: true })
    console.log('r')
    console.log(response)
    if (response.ok) {
      const json = await response.json()
      resultCollection = json as CollectionWithPagingOfMovieDataResource }
    responseStatus = response.status
  }
  catch (error: unknown) {
    console.log('ERROR X')
    const errorJSON = error as Response
    console.log(errorJSON.status)
    responseStatus = errorJSON.status
    //throw errorJSON as Response
  }
  return  { responseStatus, collection: resultCollection }
}