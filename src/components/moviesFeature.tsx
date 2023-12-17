'use client'

import { signOut } from 'next-auth/react'
import { Session } from 'next-auth'
import { useState } from 'react'
import { MenuEntryProperties } from '@/stories/homeweb/elements/MenuEntry'
import { Header } from '@/stories/homeweb/elements/Header'
import { AutoComplete } from '@/stories/homeweb/elements/AutoComplete'
import { getMovies } from '@/lib/search-movie'
import { getServerInfo } from '@/lib/server-info'

interface MoviesFeatureProperties {
  session: Session
}
export const MoviesFeature = ({ session }: MoviesFeatureProperties) => {
  const [inputValue, setInputValue] = useState('')
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

  const handleInputChange = async (e: string): Promise<void> => {
    console.log('xx: ' + e)
    setInputValue(e)
    const result = await getServerInfo()
    const result2 = await getMovies(e)
    //console.log(result)
  }

  return (
    <>
      <Header { ...headerProperties } />
      <AutoComplete suggestions={ [] } onInputValueChange={ (e) => handleInputChange(e) }/>
    </>
  )
}