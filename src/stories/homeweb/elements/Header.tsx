import { DropdownMenu } from './DropdownMenu'
import { HeaderProperties } from './HeaderProperties'
import { MenuEntryProperties } from './MenuEntry'



export const Header = ({ mainLabel, leftMenuEntries, rightMenuEntries, rightMenuLabel, onSelectMenuEntry } : HeaderProperties ) => {
  return (
    <>
      <div className="flex place-items-center bg-indigo-500 p-2">
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
              openRight
              entries={ rightMenuEntries }
              onSelectEntry={ onSelectMenuEntry } />
          </button>
        </div>
      </div>
    </>
  )
}