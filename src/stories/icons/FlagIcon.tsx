import { IconProperties } from './IconProperties'

export const FlagIcon = ({ invert }: IconProperties) => {
    const fillColor = invert ? '#FFFFFF' : '#000000'

    return (
        <> 
          <div className="bg-amber-600 inline-block p-1">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill={fillColor}><path d="M0 0h24v24H0z" fill="none"/><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/></svg>
          </div>
        </>
    )
}