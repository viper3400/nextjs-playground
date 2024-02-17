import { useState } from 'react'

export interface ListButtonProperties {
    mainText: string
    selected?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ListButton = ({ mainText, selected = false, onClick }: ListButtonProperties) => {
  const [hoverItem, setHoverItem] = useState(false)
  const baseClassName = 'p-4 w-full text-left'
  const buttonClassName =
    selected || hoverItem ? `${baseClassName} bg-slate-200` :
      `${baseClassName} bg-slate-100`

  const onMouseEnter = () => {
    setHoverItem(true)
  }

  const onMouseLeave = () => {
    setHoverItem(false)
  }
  return (
    <>
      <button
        className={ buttonClassName }
        onClick={ onClick }
        onMouseEnter={ onMouseEnter }
        onMouseLeave={ onMouseLeave }>
        {mainText}
      </button>
    </>
  )
}