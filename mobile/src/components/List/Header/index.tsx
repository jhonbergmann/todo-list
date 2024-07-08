import React, {useMemo} from 'react'
import {View} from 'react-native'

import {Counter} from '@/components/Counter'
import {styles} from './styles'
import {IHeaderProps} from './data'

export function Header({data}: IHeaderProps) {
  const checkedDataCounter = useMemo(() => {
    const filteredCheckedData = data.filter((item) => item.isChecked)

    return filteredCheckedData.length
  }, [data])

  return (
    <View style={styles.container}>
      <Counter description="Criadas" value={data.length} isFinished={false} />
      <Counter description="Concluídas" value={checkedDataCounter} isFinished />
    </View>
  )
}
