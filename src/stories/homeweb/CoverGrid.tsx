import { CoverThumb, CoverThumbProps } from './CoverThumb'
import { Spinner } from './elements/Spinner'

export interface CoverGridProps {
  coverThumbs: CoverThumbProps []
  isLoading: boolean
}

const LoadingSpinner = () => (
  <div className='flex justify-center mt-4'>
    <Spinner />
  </div>
)

export const CoverGrid = ({ coverThumbs, isLoading = false } : CoverGridProps ) => {
  return (
    <>
      { isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-5">
          {coverThumbs.map((item, index) => (
            <div key={ index } >
              <button>
                <CoverThumb { ...item } />
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  )
}