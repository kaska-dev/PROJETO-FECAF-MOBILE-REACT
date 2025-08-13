import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export const ButtonCustom = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.titleButton}>Entrar</Text>
    </TouchableOpacity>
  )
}
