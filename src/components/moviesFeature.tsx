'use client'

import { signOut } from 'next-auth/react'
import { Session } from 'next-auth'
import { useEffect, useRef, useState } from 'react'
import { MenuEntryProperties } from '@/stories/homeweb/elements/MenuEntry'
import { Header } from '@/stories/homeweb/elements/Header'
import { AutoComplete } from '@/stories/homeweb/elements/AutoComplete'
import { getMovies } from '@/lib/search-movie'
import { getServerInfo } from '@/lib/server-info'
import { CoverGrid } from '@/stories/homeweb/CoverGrid'
import { CollectionWithPagingOfMovieDataResource, MovieDataResource } from '@/lib/videodb-api'
import { CoverThumb, CoverThumbProps } from '@/stories/homeweb/CoverThumb'
import { fetchMovies } from '@/app/fetchMovies'
import picard from '../stories/homeweb/assets/picard.jpg'

interface MoviesFeatureProperties {
  session: Session
}
export const MoviesFeature = ({ session }: MoviesFeatureProperties) => {
  const [inputValue, setInputValue] = useState('')
  const [suggestions, setSuggestions] =  useState<string[]>([])
  const [gridMovies, setGridMovies] = useState<CoverThumbProps[]>([])
  const [isFetching, setIsFetching] = useState(false)
  const abortControllerRef = useRef<AbortController | null>(null)
  const menuEntries : MenuEntryProperties[] = [
    {
      label: 'Filmsuche'
    },
    {
      label: 'Gesehene Filme'
    },
    {
      label: 'Metadatensuche'
    }
  ]

  const rightMenuEntries : MenuEntryProperties[] = [
    {
      label: 'Abmelden'
    },
    {
      label: 'Passwort ändern'
    }
  ]
  const headerProperties = {
    mainLabel: 'Filmdatenbank',
    leftMenuEntries: menuEntries,
    rightMenuEntries: rightMenuEntries,
    rightMenuLabel: session.user?.name?.toLocaleUpperCase() || '' ,
    onSelectMenuEntry: (entry: MenuEntryProperties) => {
      console.log('Menu entry selected: ' + entry.label)
      if (entry.label === 'Abmelden') {
        signOut()
      }
    }
  }

  const movies = async (search: string, signal: AbortSignal ) : Promise<any> => {
    let json: any
    try {
      setIsFetching(true)
      const response = await fetch(`api/moviedata/?query=${search}`, { signal })
      console.log('singal aborted -> ' + signal.aborted)
      console.log(response)
      json = await response.json()
    } catch (error: any) {
      if (error.name === 'AbortError') {
        console.info('Fetch aborted')
      } else console.error(error.message)
      json = undefined
    }
    setIsFetching(false)
    return json
  }

  useEffect(() => {
    // This effect updates suggestions when inputValue changes
    if (abortControllerRef.current) {
      const c = abortControllerRef.current
      try {
        console.log('signal ' + c.signal.aborted)
        c.abort()
      } catch (error: any) {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted')
        } else {
          console.error('Fetch error:', error)
        }
        console.error(error)
      }
      abortControllerRef.current = null
    }
    const controller = new AbortController()
    abortControllerRef.current = controller
    const signal = controller.signal
    if (inputValue != '') {
      console.log('searching ...')
      try {
        movies(inputValue, signal).then(result => {
          if (result) {
            console.log(result)
            console.log('frontend')
            console.log(result)
            if (result === 'Unauthorized') signOut()
            if (result.value) {
              const mapped = result.value.map((v: any) => v.title)
              setSuggestions(mapped || [])
            }
          }
        })
      } catch (error: any) {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted')
        } else {
          console.error('Fetch error:', error)
        }
      }

    }
    return () => {
      controller.abort()
    }
  }, [inputValue])


  const handleInputChange = (e: string): void => {
    setInputValue(e)
  }

  return (
    <>
      <Header { ...headerProperties } />
      <AutoComplete
        suggestions={ suggestions }
        onInputValueChange={ (e) => handleInputChange(e) }
        isLoading = { isFetching }
        triggerChangeEventTimeoutMs={ 300 }
        triggerChangeEventMinInputLength={ 3 }/>
      <CoverGrid
        coverThumbs={ gridMovies }
        isLoading= { false }></CoverGrid>
    </>
  )
}