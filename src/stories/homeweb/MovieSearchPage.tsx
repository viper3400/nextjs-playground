import { useState } from 'react'
import { CoverGrid } from './CoverGrid'
import { CoverThumbProps } from './CoverThumb'
import { AutoComplete } from './elements/AutoComplete'
import { Header } from './elements/Header'
import { HeaderProperties } from './elements/HeaderProperties'

interface MovieSearchPageProperties {
    headerProperties: HeaderProperties
    coverThumbs: CoverThumbProps[]
    suggestions: string[]
}

export const MovieSearchPage = (props: MovieSearchPageProperties) => {
  const [ isLoading, setIsLoading ] = useState(false)
  return (
    <>
      <Header { ...props.headerProperties } />
      <AutoComplete isLoading={ false } suggestions = { props.suggestions } onInputValueChange={ () => {} }/>
      <CoverGrid coverThumbs={ props.coverThumbs } isLoading={ isLoading } />
    </>
  )
}