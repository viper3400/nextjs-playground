'use server'
import Image, { StaticImageData } from 'next/image'
import { SeriesIcon, FavoriteIcon, FlagIcon, LabeledIcon, VideoLibraryIcon } from './icons'

export interface CoverThumbProps {
  imageSource: string | StaticImageData;
  altText: string;
  isTvSeries: boolean
  isFavorite: boolean
  isFlagged: boolean
  isSeen: boolean
  timesSeen: string
  hasDigitalCopy: boolean,
  bottomLabel: string
}

const TvSeries = () => (
  <div className="mb-1">
    <div className="border border-neutral-200">
      <SeriesIcon invert />
    </div>
  </div>
)

const Favorite = () => (
  <div className="mb-1">
    <div className="border border-neutral-200">
      <FavoriteIcon invert />
    </div>
  </div>
)

const Flag = () => (
  <div className="mb-1">
    <div className="border border-neutral-200">
      <FlagIcon invert />
    </div>
  </div>
)

const TimesSeen = ({ timesSeen } : { timesSeen : string}) => (
  <div className="mb-1">
    <div className="border border-neutral-200">
      <LabeledIcon label={ timesSeen + 'x' } />
    </div>
  </div>
)

const fraction = '10' + String.fromCharCode(0x00BD) + 'Y'

const LastSeen = () => (
  <div className="mb-1">
    <div className="border border-neutral-200">
      <LabeledIcon label={ fraction } />
    </div>
  </div>
)

const DigitalCopy = () => (
  <div className="mb-1">
    <div className="border border-neutral-200">
      <VideoLibraryIcon invert />
    </div>
  </div>
)

export const CoverThumb = ({
  imageSource,
  altText,
  isTvSeries,
  isFavorite,
  isFlagged,
  isSeen,
  timesSeen,
  hasDigitalCopy,
  bottomLabel
} : CoverThumbProps) => {

  return (
    <>
      <div className="relative w-40 pl-4 pr-4 pt-4 pb-4">
        <div className="w-32">
          <Image

            src={ imageSource }
            alt={ altText }

            priority
          />
        </div>
        <div className="text-center bg-indigo-500 text-white font-bold p-2">
          { bottomLabel }
        </div>
        <div className="flex flex-col gap absolute top-6 right-2">
          {isTvSeries && <TvSeries />}
          {hasDigitalCopy && <DigitalCopy />}
          {isSeen && <TimesSeen timesSeen={ timesSeen } />}
          {isSeen && <LastSeen />}
          {isFavorite && <Favorite />}
          {isFlagged && <Flag />}
        </div>
      </div>

    </>
  )
}