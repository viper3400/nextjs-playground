import { IconProperties } from './IconProperties'

export const VideoLibraryIcon = ({ invert }: IconProperties) => {
  const fillColor = invert ? '#FFFFFF' : '#000000'

  return (
    <>
      <div className="bg-lime-500 inline-block p-1">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill={ fillColor }><path d="M0 0h24v24H0z" fill="none"/><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"/></svg>
      </div>
    </>
  )
}