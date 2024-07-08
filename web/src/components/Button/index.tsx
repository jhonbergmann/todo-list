import styles from './Button.module.css'
import {IButtonProps} from './data'

export function Button({children, ...rest}: IButtonProps) {
  return (
    <button className={styles.container} {...rest}>
      {children}
    </button>
  )
}
