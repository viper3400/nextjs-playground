import { DropdownMenu } from './DropdownMenu'
import { HeaderProperties } from './HeaderProperties'
import { MenuEntryProperties } from './MenuEntry'



export const Header = ({ mainLabel, leftMenuEntries, rightMenuEntries, rightMenuLabel, onSelectMenuEntry } : HeaderProperties ) => {
  return (
    <>
      <div className="flex place-items-center bg-indigo-500 p-2">
        <div className='flex-none mr-4'>
          <DropdownMenu
            entries={ leftMenuEntries }
            onSelectEntry={ onSelectMenuEntry } />
        </div>
        <div className="flex-none mr-2 font-bold text-2xl text-white">
          <div>{mainLabel}</div>
        </div>
        <div className='ml-auto'>
          <DropdownMenu
            label={ rightMenuLabel }
            openRight
            entries={ rightMenuEntries }
            onSelectEntry={ onSelectMenuEntry } />
        </div>
      </div>
    </>
  )
}