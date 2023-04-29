
import Image, { StaticImageData } from 'next/image'
import { SeriesIcon, FavoriteIcon, FlagIcon } from './icons';

interface CoverThumbProps {
  imageSource: string | StaticImageData;
  altText: string;
  isTvSeries: boolean
  isFavorite: boolean
  isFlagged: boolean
}

export const CoverThumb = ({imageSource, altText, isTvSeries, isFavorite, isFlagged} : CoverThumbProps) => {
    return (
        <>
            <div className="relative w-40 pl-4 pr-4 pt-4 pb-4">
                <div className="w-32">
                    <Image
                       
                        src={imageSource}
                        alt={altText}
                
                        priority
                        />
                    </div>
                <div className="flex flex-col gap absolute top-6 right-2 border">
                    {isTvSeries ? <SeriesIcon invert /> : ''}
                    {isFavorite ? <FavoriteIcon invert /> : ''}
                    {isFlagged ? <FlagIcon invert /> : ''}
                </div>
            </div>
            
        </>
    )
}