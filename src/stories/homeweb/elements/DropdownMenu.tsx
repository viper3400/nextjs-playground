import React, { useEffect, useRef } from 'react'
import { MenuIcon } from '../icons'
import { MenuEntry, MenuEntryProperties } from './MenuEntry'

interface DropdownMenuProperties {
    /**
     * If label is set, then the menu icon will not be displayed.
     */
    label?: string
    entries: MenuEntryProperties[]
    openRight?: boolean
    onSelectEntry: (entry: MenuEntryProperties) => void
}

const MappedEntries = ({ entries, onSelectEntry }: DropdownMenuProperties) =>  {
  return (
    <>
      {
        entries.map((item, index) => (
          <div key={ index } className='flex bg-slate-100 hover:bg-slate-200 w-48' >
            <MenuEntry label={ item.label }
              onClick={
                () => {
                  onSelectEntry(item)
                } }/>
          </div>))
      }
    </>
  )
}

export const DropdownMenu = ({ label, entries,openRight, onSelectEntry }: DropdownMenuProperties) => {
  const [ isFocused, setIsFocused ] = React.useState(false)

  const wrapperRef = useRef<any>(null)
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsFocused(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperRef])

  return (
    <>
      <div className='relative' ref={ wrapperRef }>
        <button onClick={ () => setIsFocused(!isFocused) }>
          <div className={ `${isFocused ? 'bg-indigo-300' : ''}` }>
            {
              !label && <MenuIcon invert/>
            }
            {
              label &&
            <div className='text-white p-2'>{ label } </div>
            }
          </div>
        </button>
        { isFocused && (
          <div className={ `absolute z-10 ${openRight ? 'right-0' : 'left-0'} top-full rounded-md shadow-lg` }>

            <MappedEntries
              entries={ entries }
              onSelectEntry={ (item) => {
                setIsFocused(false)
                onSelectEntry(item)
              } } />

          </div>
        )}
      </div>
    </>
  )
}