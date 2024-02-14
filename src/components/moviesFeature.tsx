'use client'

import { signOut } from 'next-auth/react'
import { Session } from 'next-auth'
import { useEffect, useState } from 'react'
import { MenuEntryProperties } from '@/stories/homeweb/elements/MenuEntry'
import { Header } from '@/stories/homeweb/elements/Header'
import { AutoComplete } from '@/stories/homeweb/elements/AutoComplete'
import { getMovies } from '@/lib/search-movie'
import { getServerInfo } from '@/lib/server-info'
import { CoverGrid } from '@/stories/homeweb/CoverGrid'
import { MovieDataResource } from '@/lib/videodb-api'
import { CoverThumb, CoverThumbProps } from '@/stories/homeweb/CoverThumb'
import picard from '../stories/homeweb/assets/picard.jpg'

interface MoviesFeatureProperties {
  session: Session
}
export const MoviesFeature = ({ session }: MoviesFeatureProperties) => {
  const [inputValue, setInputValue] = useState('')
  const [suggestions, setSuggestions] =  useState<string[]>([])
  const [gridMovies, setGridMovies] = useState<CoverThumbProps[]>([])
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

  useEffect(() => {
    // This effect updates suggestions when inputValue changes
    const fetchSuggestions = async () => {
      const result = await getMovies(inputValue)
      if (result.responseStatus === 401) {
        console.error('401 --')
        signOut()
      }
      if (result.collection.value) {
        const mapped = result.collection.value.map((v) => v.title)
        setSuggestions(mapped || [])
      }
    }

    fetchSuggestions()
    console.log(inputValue)

  }, [inputValue])

  /* useEffect(() => {
    // This effect updates gridMovies when search results are available
    const fetchMovies = async () => {
      const result = await getMovies(inputValue)
      if (result.collection.value) {
        const gridCovers = result.collection?.value?.map((value) => {
          // Adjust the following logic based on your CoverThumbProps requirements
          const currentCover: CoverThumbProps = {
            imageSource: picard,
            altText: value.title || 'Unknown Title',
            bottomLabel: value.diskid || '',
            isFavorite: value.isFavorite || false,
            isSeen: value.lastSeenInformation ? true : false,
            timesSeen: '0',
            isFlagged: value.isFlagged || false,
            isTvSeries: value.istv || false,
            hasDigitalCopy: value.filename ? true : false,
          }
          return currentCover          })
        setGridMovies(gridCovers)
      }
    }

    if (inputValue.length >= 4) {
      fetchMovies()
    }
  }, [inputValue])*/

  const handleInputChange = (e: string): void => {
    setInputValue(e)
  }

  return (
    <>
      <Header { ...headerProperties } />
      <AutoComplete suggestions={ suggestions } onInputValueChange={ (e) => handleInputChange(e) } triggerChangeEventTimeoutMs={ 500 } triggerChangeEventMinInputLength={ 4 }/>
      <CoverGrid
        coverThumbs={ gridMovies }
        isLoading= { false }></CoverGrid>
    </>
  )
}