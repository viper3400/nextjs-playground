import { IconProperties } from "./IconProperties"

export const SeriesIcon = ({ invert }: IconProperties) => {
    const fillColor = invert ? '#FFFFFF' : '#000000'

    return (
        <> 
          <div className="bg-indigo-500 inline-block p-1">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill={fillColor}><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 10v8l7-4zm12-4h-7.58l3.29-3.29L16 2l-4 4h-.03l-4-4-.69.71L10.56 6H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 14H3V8h18v12z"/></svg>
          </div>
        </>
    )
}