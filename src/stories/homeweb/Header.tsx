import { MenuIcon } from './icons'

export const Header = () => {
  return (
    <>
      <div className="flex flex-row place-items-center bg-indigo-500 p-4">
        <div>
          <MenuIcon invert />
        </div>
        <div className="pl-6 font-bold text-2xl text-white">
          Filmdatenbank
        </div>
      </div>
    </>
  )
}