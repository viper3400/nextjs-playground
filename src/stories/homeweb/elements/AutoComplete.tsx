import React, { useState } from 'react'
import { TextInput } from './TextInput'
import { SelectableList } from './SelectableList'
import { ListButtonProperties } from './ListButton'

interface AutoCompleteProperties {
  suggestions: string[]
  onInputValueChange: (value: string) => void
  triggerChangeEventTimeoutMs?: number
  triggerChangeEventMinInputLength?: number
}

export const AutoComplete = (
  { suggestions, onInputValueChange,
    triggerChangeEventMinInputLength = 4,
    triggerChangeEventTimeoutMs = 500 } : AutoCompleteProperties) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [inputChangeTimeout, setInputChangeTimeout] = useState<NodeJS.Timeout | undefined>(undefined)

  const handleInputChange = (inputName: string, value: string) => {
    const inputValue = value
    setInputValue(inputValue)

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
          // Filter suggestions based on the input value
          const filtered: string[] = suggestions.filter((suggestion: string) =>
            suggestion.toLowerCase().includes(inputValue.toLowerCase())
          )

          if (inputValue === '') setFilteredSuggestions([])
          else setFilteredSuggestions(filtered)

          if (filtered.length > 0) setShowSuggestions(true)
          else setShowSuggestions(false)
        }, triggerChangeEventTimeoutMs)
      )
    } else {
      // Clear suggestions and hide suggestions if input length is not greater than 3
      setFilteredSuggestions([])
      setShowSuggestions(false)
    }
  }
  const onListItemClick = (item: ListButtonProperties, index: number) => {
    handleInputChange('suggestion', item.mainText)
    setFilteredSuggestions([])
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
        {showSuggestions && (
          <div className="w-full pl-4 pr-4 absolute z-10">
            <SelectableList
              listItems={
                filteredSuggestions.map(mainText => ({
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

