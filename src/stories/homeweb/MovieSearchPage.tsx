
import { CoverGrid } from './CoverGrid'
import { CoverThumbProps } from './CoverThumb'
import { Header } from './elements/Header'
import { HeaderProperties } from './elements/HeaderProperties'

interface MovieSearchPageProperties {
    headerProperties: HeaderProperties
    coverThumbs: CoverThumbProps[]
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
      <CoverGrid coverThumbs={ props.coverThumbs } />
    </>
  )
}