import Image from 'next/image'

interface DogImageProperties {
  imageSource: string
}

export function DogImage ( { imageSource }: DogImageProperties) {

  return (
    <Image
      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
      src={ imageSource }
      alt="A random image of a dog"
      width={ 280 }
      height={ 137 }
      priority
    />
  )
}