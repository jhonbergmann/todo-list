import React, {useState} from 'react'
import {View} from 'react-native'
import {Feather} from '@expo/vector-icons'

import {styles} from './styles'
import {ITask} from './data'

import {Button} from '@/components/Button'
import {Header} from '@/components/Header'
import {Input} from '@/components/Input'
import {List} from '@/components/List'

export function Home() {
  const [newTaskValue, setNewTaskValue] = useState('')
  const [tasks, setTasks] = useState<ITask[]>([])

  function removeTask(taskIdToBeRemoved: number) {
    const filteredTasks = tasks.filter((task) => task.id !== taskIdToBeRemoved)

    setTasks(filteredTasks)
  }

  function toggleTaskCheck(taskIdToBeChecked: number) {
    const immutableTasks = tasks.map((task) => ({...task}))

    const taskToBeUpdated = immutableTasks.find((task) => task.id === taskIdToBeChecked)

    if (taskToBeUpdated) {
      taskToBeUpdated.isChecked = !taskToBeUpdated.isChecked
      setTasks(immutableTasks)
    }
  }

  function addTask() {
    if (!newTaskValue) {
      return
    }

    const newTask: ITask = {
      id: Date.now(),
      text: newTaskValue,
      isChecked: false,
    }

    setTasks((oldTasks) => [...oldTasks, newTask])
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Input value={newTaskValue} onChangeText={setNewTaskValue} />
          <Button onPress={addTask}>
            <Feather name="plus-circle" size={16} color="#F2F2F2" />
          </Button>
        </View>
        <List data={tasks} removeTask={removeTask} toggleTaskCheck={toggleTaskCheck} />
      </View>
    </View>
  )
}
