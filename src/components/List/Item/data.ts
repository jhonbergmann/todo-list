import {ITask} from '@/data'

export interface IItemProps {
  data: ITask
  removeTask: (id: number) => void
  toggleTaskStatus: ({id, value}: {id: number; value: boolean}) => void
}
