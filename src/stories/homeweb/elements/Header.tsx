import { DropdownMenu } from './DropdownMenu'
import { MenuEntryProperties } from './MenuEntry'

interface HeaderProperties {
  mainLabel: string
  leftMenuEntries: MenuEntryProperties[]
  rightMenuEntries: MenuEntryProperties[]
  rightMenuLabel: string
  onSelectMenuEntry: () => void
}

export const Header = ({ mainLabel, leftMenuEntries, rightMenuEntries, rightMenuLabel, onSelectMenuEntry } : HeaderProperties ) => {
  return (
    <>
      <div className="flex place-items-center bg-indigo-500 p-4">
        <div className='flex-none mr-4'>
          <button>
            <DropdownMenu
              entries={ leftMenuEntries }
              onSelectEntry={ onSelectMenuEntry } />
          </button>
        </div>
        <div className="flex-none mr-2 font-bold text-2xl text-white">
          <div>{mainLabel}</div>
        </div>
        <div className='ml-auto'>
          <button>
            <DropdownMenu
              label={ rightMenuLabel }
              entries={ rightMenuEntries }
              onSelectEntry={ onSelectMenuEntry } />
          </button>
        </div>
      </div>
    </>
  )
}