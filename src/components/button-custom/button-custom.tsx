import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export const ButtonCustom = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.titleButton}>Login</Text>
    </TouchableOpacity>
  )
}