export const validateProps = (props: { [x: string]: any }) => {
  const newProps : any = {}
  
  Object.keys(props).forEach((key) => {
    if (key.startsWith('data-') || key === 'className') newProps[key] = props[key]
  })
  
  return newProps
}
  
  