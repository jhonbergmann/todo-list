import {ITask} from '@/screens/Home/data'

export type IItempProps = {
  item: ITask
  removeTask: (taskIdToBeRemoved: number) => void
  toggleTaskCheck: (taskIdToBeChecked: number) => void
}
