'use server'

import { signOut } from 'next-auth/react'
import { getVideoDBApiForUserSession } from './getVideoDBApiForUserSession'
import { CollectionWithPagingOfMovieDataResource, MovieDataResource } from './videodb-api'

export async function getMovies (searchValue: string )
        : Promise<CollectionWithPagingOfMovieDataResource> {
  console.log('getMovies - search for ' + searchValue)
  const api = await getVideoDBApiForUserSession()
  let resultCollection : CollectionWithPagingOfMovieDataResource = {}
  try {
    const response = await api.moviedata.movieDataGetMovieData({ Title: searchValue })
    console.log('r')
    console.log(response)
    if (response.ok) {
      const json = await response.json()
      resultCollection = json as CollectionWithPagingOfMovieDataResource
    }
  }
  catch (error) {
    console.log('ERROR X')
    const errorJSON = error as Response
    console.log(errorJSON.status)
    throw errorJSON as Response
  }
  return resultCollection
}