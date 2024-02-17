import React, { useEffect, useState } from 'react'
import { ListButton, ListButtonProperties } from './ListButton'

interface SelectableListProperties {
    listItems: ListButtonProperties[]
    onItemClick?: (item: ListButtonProperties, index: number) => void
}
export const SelectableList = ({ listItems, onItemClick }: SelectableListProperties) => {

  const [selectedListItem, setSelectedListItem] = useState<{ item: ListButtonProperties, index: number } | undefined>(undefined)

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  })

  const onClick = (item: ListButtonProperties, index: number) => {
    setSelectedListItem({ item, index })
    // Emitting the onItemClick event to the parent if provided
    if (onItemClick) onItemClick(item, index)
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setSelectedListItem(prev => {
        if (!prev) return { item: listItems[listItems.length - 1], index: listItems.length - 1 }
        return { item: listItems[prev.index === 0 ? listItems.length - 1 : prev.index - 1], index: prev.index === 0 ? listItems.length - 1 : prev.index - 1 }
      })
    } else if (event.key === 'ArrowDown') {
      event.preventDefault()
      setSelectedListItem(prev => {
        if (!prev) return { item: listItems[0], index: 0 }
        return { item: listItems[prev.index === listItems.length - 1 ? 0 : prev.index + 1], index: prev.index === listItems.length - 1 ? 0 : prev.index + 1 }
      })
    } else if (event.key === 'Enter' && selectedListItem) {
      event.preventDefault()
      onItemClick && onItemClick(selectedListItem.item, selectedListItem.index)
    }
  }

  const items =
        listItems.map((item, index) =>
          <div key={ index }>
            <ListButton
              mainText={ item.mainText }
              selected={ selectedListItem && selectedListItem.index === index ? true : undefined }
              onClick={ () => onClick(item, index) } />
          </div>)

  return (
    <>
      <div>{items}</div>
    </>
  )
}
