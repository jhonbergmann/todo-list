import React from 'react'
import {Text, View} from 'react-native'

import {styles} from './styles'
import {ICouterProps} from './data'

export function Counter({description, value, isFinished}: ICouterProps) {
  return (
    <View style={styles.container}>
      <Text
        style={
          isFinished
            ? {...styles.description, ...styles.descriptionFinished}
            : {...styles.description, ...styles.descriptionCreated}
        }
      >
        {description}
      </Text>
      <View style={styles.valueContainer}>
        <Text style={styles.valueText}>{value}</Text>
      </View>
    </View>
  )
}
