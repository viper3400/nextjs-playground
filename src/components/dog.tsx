'use client'

import { useContext, useState } from 'react'
import { signOut } from 'next-auth/react'
import { getDog } from '@/lib/dogs'
import { getTemperature } from '@/lib/weather'
import { LoginForm } from '@/stories/homeweb/LoginForm'
import { AuthenticationContext } from '@/auth-provider'
import { Button } from '@/stories/Button'
import { removeLocalStorage } from '@/lib/localStorageManager'
import { Spinner } from '@/stories/homeweb/elements/Spinner'
import { JaxxButton } from './jaxx-button'
import { DogImage } from './dog-image'


export const Dog = () => {
  const [ dogImage, setDogImage] = useState('https://autohub.ir/static/newapi/web/img/not_found.png')
  const [ loading, setLoading] = useState(false)
  const [ temperature, setTemperature] = useState('not set')
  const [ buttonDisabled, setButtonDisabled] = useState(false)
  const { state, setState } = useContext(AuthenticationContext)

  const handleClick = async () => {
    setLoading(true)
    setButtonDisabled(true)
    const dog = await getDog()
    const temp = await getTemperature()
    setTemperature(temp.current_weather.temperature)
    setDogImage(dog.message)
    setLoading(false)
    setButtonDisabled(false)
  }
  return (
    <>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        { loading ? (
          <Spinner size={ 'large' } />
        ) : (
          <DogImage imageSource={ dogImage }/>
        )}
      </div>
      <div>
        <JaxxButton label="Show me a random dog" onClick={ handleClick } disabled={ buttonDisabled }/>
      </div>
      <div>
        <Button
          label="Clear local storage"
          onClick={ () => {
            removeLocalStorage()
            setState('NOT_AUTHENTICATED')
          } }
          size="large"
        />
        <Button
          label="Sign Out"
          onClick={ () => signOut() }
          size="large"
        />
      </div>
      <div>
        <p>Current temperature in Zollikofen: {temperature} °C</p>
      </div>
    </>
  )
}