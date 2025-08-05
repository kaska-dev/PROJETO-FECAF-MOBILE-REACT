import { router } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export const ButtonCustom = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.titleButton}>Login</Text>
    </TouchableOpacity>
  )
}
export const ButtonReturn = () => {
  return (
    <TouchableOpacity onPress={() => router.navigate('/_sitemap')} style={styles.container}>
      <Text style={styles.titleButton}>Return</Text>
    </TouchableOpacity>
  )
}