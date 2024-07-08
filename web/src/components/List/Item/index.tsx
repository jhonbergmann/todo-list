import {Trash, Check} from '@phosphor-icons/react'

import styles from './Item.module.css'
import {IItemProps} from './data'

export function Item({data, removeTask, toggleTaskStatus}: IItemProps) {
  function handleTaskToggle() {
    toggleTaskStatus({id: data.id, value: !data.isChecked})
  }

  function handleRemove() {
    removeTask(data.id)
  }

  const checkboxCheckedClassName = data.isChecked ? styles['checkbox-checked'] : styles['checkbox-unchecked']
  const paragraphCheckedClassName = data.isChecked ? styles['paragraph-checked'] : ''

  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox" onClick={handleTaskToggle}>
          <input readOnly type="checkbox" checked={data.isChecked} />
          <span className={`${styles.checkbox} ${checkboxCheckedClassName}`}>
            {data.isChecked && <Check size={12} />}
          </span>

          <p className={`${styles.paragraph} ${paragraphCheckedClassName}`}>{data.text}</p>
        </label>
      </div>

      <button onClick={handleRemove}>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  )
}
