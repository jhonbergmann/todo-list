import React, {useState} from 'react'
import {TextInput} from 'react-native'

import {styles} from './styles'
import {IInputProps} from './data'

export function Input({value, onChangeText}: IInputProps) {
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus() {
    setIsFocused(true)
  }

  function handleBlur() {
    setIsFocused(false)
  }

  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor="#808080"
      style={isFocused ? {...styles.input, ...styles.focused} : styles.input}
    />
  )
}
