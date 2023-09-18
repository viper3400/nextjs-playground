import React, { useState } from 'react'
import { TextInput } from './TextInput'
import { MenuEntry } from './MenuEntry'

export const AutoComplete = ({ suggestions } : any) => {
  const [inputValue, setInputValue] = useState('')
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  const handleInputChange = (inputName: string, value: string) => {
    const inputValue = value
    setInputValue(inputValue)

    // Filter suggestions based on the input value
    const filtered = suggestions.filter((suggestion: any) =>
      suggestion.toLowerCase().includes(inputValue.toLowerCase())
    )

    setFilteredSuggestions(filtered)
    if (inputValue !== '') setShowSuggestions(true)
    else setShowSuggestions(false)
  }

  const handleSuggestionClick = (suggestion: any) => {
    setInputValue(suggestion)
    setFilteredSuggestions([])
    setShowSuggestions(false)
  }

  const handleInputBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false)
    }, 200)
  }

  return (
    <>
      <div className="autocomplete">
        {/* <input
          type="text"
          value={ inputValue }
          onChange={ handleInputChange }
          onBlur={ handleInputBlur }
          placeholder="Type to search..."
          />*/}
        < TextInput
          inputName='inputValue'
          label=''
          content={ inputValue }
          onChange={ handleInputChange }
          setFocus />
        {showSuggestions && (
          <ul className="w-full m-2 absolute z-10">
            {filteredSuggestions.map((suggestion, index) => (
              <li className="bg-slate-100 hover:bg-slate-200"
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

