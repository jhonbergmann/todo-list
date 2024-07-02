import styles from './Header.module.css'
import {IHeaderProps} from './data'

export function Header({tasksCounter, checkedTasksCounter}: IHeaderProps) {
  return (
    <header className={styles.container}>
      <aside>
        <p>Tarefas criadas</p>
        <span>{tasksCounter}</span>
      </aside>
      <aside>
        <p>Concluídas</p>
        <span>{tasksCounter === 0 ? tasksCounter : `${checkedTasksCounter} de ${tasksCounter}`}</span>
      </aside>
    </header>
  )
}
