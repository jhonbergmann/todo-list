import {Dispatch, SetStateAction} from 'react'

export type IInputProps = {
  value: string
  onChangeText: Dispatch<SetStateAction<string>>
}
