import { ButtonReturn } from '@/src/components/button-custom/button-custom'
import { Text, View } from 'react-native'
import { styles } from './styles'

export const FirstPage = () => {
  return (
    <View style={styles.container}>
      <Text>Olá</Text>
      <ButtonReturn />
    </View>
  )
}