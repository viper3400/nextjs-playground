import { IconProperties } from './IconProperties'

export const MenuIcon = ({ invert }: IconProperties) => {
  const fillColor = invert ? '#FFFFFF' : '#000000'

  return (
    <>
      <div className="p-1">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill={ fillColor }><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
      </div>
    </>
  )
}