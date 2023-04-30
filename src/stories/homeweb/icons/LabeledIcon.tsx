interface LabeledIconProperties {
  label: string
}

export const LabeledIcon = ({ label } : LabeledIconProperties) => {
  
  return (
    <> 
      <div className="w-8 h-8 bg-indigo-500 text-white flex items-center justify-center text-xs font-bold">
        {label}
      </div>
    </>
  )
}