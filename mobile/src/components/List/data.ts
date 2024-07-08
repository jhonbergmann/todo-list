import {ITask} from '@/screens/Home/data'

export type IListProps = {
  data: ITask[]
  removeTask: (taskIdToBeRemoved: number) => void
  toggleTaskCheck: (taskIdToBeChecked: number) => void
}
