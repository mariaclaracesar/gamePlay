import {} from 'react-native'

import { TextInput, TextInputProps } from 'react-native'
import { styles } from './styles'


export function TextArea({...rest}: TextInputProps){
  return (
    <TextInput 
    style={styles.container}
    {...rest}
    />
  )
}