export interface MenuEntryProperties {
  /**
   * Label for the menu entry
   */
  label: string
  /**
   * Optional click handler
   */
    onClick?: () => void;
}
export const MenuEntry = ({ label, ...props }: MenuEntryProperties) => {
  return (
    <>
      <button
        className="p-4"
        { ...props }>
        { label }
      </button>
    </>
  )
}