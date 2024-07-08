import React from 'react'
import {TouchableOpacity} from 'react-native'

import {styles} from './styles'
import {IButtonProps} from './data'

export function Button({children, onPress}: IButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.6}>
      {children}
    </TouchableOpacity>
  )
}
