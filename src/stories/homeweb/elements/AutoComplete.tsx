import React, { useState } from 'react'
import { TextInput } from './TextInput'
import { SelectableList } from './SelectableList'
import { ListButtonProperties } from './ListButton'
import { Spinner } from './Spinner'

interface AutoCompleteProperties {
  suggestions: string[]
  onInputValueChange: (value: string) => void
  isLoading: boolean
  triggerChangeEventTimeoutMs?: number
  triggerChangeEventMinInputLength?: number
}

export const AutoComplete = (
  { suggestions, onInputValueChange,
    isLoading = false,
    triggerChangeEventMinInputLength = 4,
    triggerChangeEventTimeoutMs = 500 } : AutoCompleteProperties) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [inputChangeTimeout, setInputChangeTimeout] = useState<NodeJS.Timeout | undefined>(undefined)

  const handleInputChange = (inputName: string, value: string) => {
    setInputValue(value)
    if (suggestions.length > 0 && inputValue.length > 0) setShowSuggestions(true)
    // Clear existing timeout
    if (inputChangeTimeout) {
      clearTimeout(inputChangeTimeout)
    }

    // Check if the input length is greater than 3 before triggering actions
    if (inputValue.length >= triggerChangeEventMinInputLength && inputName!= 'suggestion') {
      // Set a timeout of 500ms before taking actions
      setInputChangeTimeout(
        setTimeout(() => {
          onInputValueChange(inputValue)
        }, triggerChangeEventTimeoutMs)
      )
    } else {
      // Clear suggestions and hide suggestions if input length is not greater than 3
      setShowSuggestions(false)
    }
  }
  const onListItemClick = (item: ListButtonProperties, index: number) => {
    handleInputChange('suggestion', item.mainText)
    setShowSuggestions(false)
  }

  return (
    <>
      <div className="autocomplete">
        < TextInput
          inputName='inputValue'
          label='Suchbegriff (Film / Regalstandort)'
          classNames='pt-4 pl-4 pr-4'
          value= { inputValue }
          onChange={ handleInputChange }
          setFocus />
        {isLoading && (
          <div className="right-0 top-0 mr-4 mt-4">
            <Spinner size="small"  />
          </div>
        )}
        {showSuggestions && (
          <div className="w-full pl-4 pr-4 absolute z-10">
            <SelectableList
              listItems={
                suggestions.map(mainText => ({
                  mainText
                })) }
              onItemClick={ onListItemClick }
            />
          </div>
        )}
      </div>
    </>
  )
}

