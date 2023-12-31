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

  const handleInputChange = (inputName: string, value: string) => {
    const inputValue = value
    onInputValueChange(inputValue)
    setInputValue(inputValue)

    // Filter suggestions based on the input value
    const filtered: string[] = suggestions.filter((suggestion: string) =>
      suggestion.toLowerCase().includes(inputValue.toLowerCase())
    )

    if (inputValue == '') setFilteredSuggestions([])
    else setFilteredSuggestions(filtered)

    if (filtered.length > 0) setShowSuggestions(true)
    else setShowSuggestions(false)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion)
    setFilteredSuggestions([])
    setShowSuggestions(false)
  }

  const handleKeyDown = (key: React.KeyboardEvent<HTMLInputElement>) => {
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

