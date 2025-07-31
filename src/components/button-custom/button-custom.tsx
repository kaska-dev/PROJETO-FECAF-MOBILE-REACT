import { router } from 'expo-router'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export const ButtonCustom = () => {
  return (
    <TouchableOpacity onPress={() => router.navigate('/first-page')} style={styles.container}>
      <Text style={styles.titleButton}>Login</Text>
    </TouchableOpacity>
  )
}