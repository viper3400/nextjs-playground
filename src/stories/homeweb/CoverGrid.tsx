import { CoverThumb, CoverThumbProps } from './CoverThumb'

export const CoverGrid = ({ coverThumbs } : { coverThumbs: CoverThumbProps[] }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5">
        {coverThumbs.map((item, index) => (
          <div key={ index } ><CoverThumb { ...item } /></div>
        ))}
      </div>
    </>
  )
}