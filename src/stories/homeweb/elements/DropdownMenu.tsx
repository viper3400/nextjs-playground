import { MenuEntry, MenuEntryProperties } from './MenuEntry'

interface DropdownMenuProperties {
    entries: MenuEntryProperties[]
}
export const DropdownMenu = ({ entries }: DropdownMenuProperties) => {
  return (
    <>
      {entries.map((item, index) => (
        <div key={ index } className='flex bg-slate-100 hover:bg-slate-400' >
          <MenuEntry label={ item.label } onClick={ item.onClick }/>
        </div>
      ))}
    </>
  )
}