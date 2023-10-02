

interface SpinnerProps {
  size: 'small' | 'medium' | 'large'
}
export const Spinner = ({ size }: SpinnerProps) => {
  // Define an object that maps size names to their corresponding values
  const sizeMapping = {
    small: 'w-6 h-6',
    medium: 'w-10 h10',
    large: 'w-12 h-12',
  }

  // Get the size value based on the size prop, default to 'medium' if not provided
  const spinnerSize = sizeMapping[size] || sizeMapping.small
  return (
    <>
      <div aria-label="Loading..." role="status">
        <svg className={ `animate-spin ${spinnerSize} stroke-slate-500` } viewBox="0 0 256 256">
          <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
          </line>
          <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
          </line>
          <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
          </line>
          <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
          </line>
          <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
          </line>
          <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
          </line>
          <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
          </line>
          <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
          </line>
        </svg>
      </div>
    </>
  )
}