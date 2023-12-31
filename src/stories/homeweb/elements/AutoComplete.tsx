import React, { useState } from 'react'
import { TextInput } from './TextInput'
import { MenuEntry } from './MenuEntry'

interface AutoCompleteProperties {
  suggestions: string[]
  onInputValueChange: (value: string) => void
}

export const AutoComplete = ({ suggestions, onInputValueChange } : AutoCompleteProperties) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1)
  const [inputChangeTimeout, setInputChangeTimeout] = useState<NodeJS.Timeout | undefined>(undefined)

  const handleInputChange = (inputName: string, value: string) => {
    const inputValue = value
    onInputValueChange(inputValue)
    setInputValue(inputValue)

    // Clear existing timeout
    if (inputChangeTimeout) {
      clearTimeout(inputChangeTimeout)
    }

    // Check if the input length is greater than 3 before triggering actions
    if (inputValue.length > 3) {
      // Set a timeout of 500ms before taking actions
      setInputChangeTimeout(
        setTimeout(() => {
          // Filter suggestions based on the input value
          const filtered: string[] = suggestions.filter((suggestion: string) =>
            suggestion.toLowerCase().includes(inputValue.toLowerCase())
          )

          if (inputValue === '') setFilteredSuggestions([])
          else setFilteredSuggestions(filtered)

          if (filtered.length > 0) setShowSuggestions(true)
          else setShowSuggestions(false)
        }, 500)
      )
    } else {
      // Clear suggestions and hide suggestions if input length is not greater than 3
      setFilteredSuggestions([])
      setShowSuggestions(false)
    }
  }
  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion)
    setFilteredSuggestions([])
    setShowSuggestions(false)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
    case 'ArrowUp':
      event.preventDefault()
      setSelectedSuggestion((prev) => (prev > 0 ? prev - 1 : filteredSuggestions.length - 1))
      break
    case 'ArrowDown':
      event.preventDefault()
      setSelectedSuggestion((prev) => (prev < filteredSuggestions.length - 1 ? prev + 1 : 0))
      break
    case 'Enter':
      if (selectedSuggestion !== -1) {
        event.preventDefault()
        handleSuggestionClick(filteredSuggestions[selectedSuggestion])
      }
      break
    default:
      break
    }
  }


  return (
    <>
      <div className="autocomplete" onKeyDown={ handleKeyDown }>
        < TextInput
          inputName='inputValue'
          label='Suchbegriff (Film / Regalstandort)'
          classNames='pt-4 pl-4 pr-4'
          value= { inputValue }
          onChange={ handleInputChange }
          setFocus />
        {showSuggestions && (
          <ul className="w-full pl-4 pr-4 absolute z-10">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                className={ `${
                  selectedSuggestion === index ? 'bg-slate-300' : 'bg-slate-100'
                } hover:bg-slate-200` }
                key={ index }
                onClick={ () => handleSuggestionClick(suggestion) }
              ><MenuEntry label={ suggestion } />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

