'use client'

import { getDog } from '@/lib/dogs'
import { getTemperature } from '@/lib/weather'
import { JaxxButton } from './jaxx-button'
import { DogImage } from './dog-image'
import { useState } from 'react'


export const Dog = () => {
    const [ dogImage, setDogImage] = useState('https://filestore.community.support.microsoft.com/api/images/ext?url=https:%2f%2fanswersstaticfilecdnv2.azureedge.net%2fstatic%2fimages%2fimage-not-found.jpg')
    const [ temperature, setTemperature] = useState()
    const [ buttonDisabled, setButtonDisabled] = useState(false)

    const handleClick = async () => {
        setButtonDisabled(true)
        const dog = await getDog()
        const temp = await getTemperature()
        setTemperature(temp.current_weather.temperature)
        setDogImage(dog.message)
        setButtonDisabled(false)
    }
    return (
        <>
           <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
            <DogImage imageSource={dogImage}/>
            </div>
            <div>
                <JaxxButton label="Show me a random dog" onClick={handleClick} disabled={buttonDisabled}/>
            </div>
            <div>
                <p>Current temperature in Zollikofen: {temperature} °C</p>
            </div>
        </>
    )
}