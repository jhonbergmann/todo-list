import styles from './Input.module.css'
import {IInputProps} from './data'

export function Input({...rest}: IInputProps) {
  return <input className={styles.container} placeholder="Adicione uma nova tarefa" {...rest} />
}
