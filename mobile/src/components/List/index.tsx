import React from 'react'
import {FlatList, View} from 'react-native'

import {Header} from '@/components/List/Header'
import {Empty} from '@/components/List/Empty'
import {Item} from '@/components/List/Item'
import {styles} from './styles'
import {IListProps} from './data'

export function List({data, removeTask, toggleTaskCheck}: IListProps) {
  return (
    <View style={styles.container}>
      <Header data={data} />
      <FlatList
        data={data}
        renderItem={({item}) => <Item item={item} removeTask={removeTask} toggleTaskCheck={toggleTaskCheck} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Empty />}
        contentContainerStyle={{paddingBottom: 24}}
      />
    </View>
  )
}
