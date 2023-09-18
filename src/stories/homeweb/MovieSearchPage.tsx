
import { CoverGrid } from './CoverGrid'
import { CoverThumbProps } from './CoverThumb'
import { AutoComplete } from './elements/AutoComplete'
import { Header } from './elements/Header'
import { HeaderProperties } from './elements/HeaderProperties'

interface MovieSearchPageProperties {
    headerProperties: HeaderProperties
    coverThumbs: CoverThumbProps[]
    suggestions: any
}

export const MovieSearchPage = (props: MovieSearchPageProperties) => {
  return (
    <>
      <Header
        leftMenuEntries = { props.headerProperties.leftMenuEntries }
        mainLabel= { props.headerProperties.mainLabel }
        onSelectMenuEntry={ () => {} }
        rightMenuEntries={ props.headerProperties.rightMenuEntries }
        rightMenuLabel={ props.headerProperties.rightMenuLabel }
      />
      <AutoComplete suggestions = { props.suggestions } />
      <CoverGrid coverThumbs={ props.coverThumbs } />
    </>
  )
}