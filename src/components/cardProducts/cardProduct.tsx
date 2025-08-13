import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function ProductCard({ item }) {

  const valueProduct = Number(item.price) * (1 - Number(item.discountPercentage) / 100);

  return (
    <TouchableOpacity activeOpacity={0.85} style={styles.card}>
      {item.thumbnail ? (
        <Image source={{ uri: item.thumbnail }} style={styles.thumb} resizeMode="cover" />
      ) : (
        <View style={styles.thumb}></View>
      )}

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <View style={styles.row}>
          <Text style={styles.priceDesc}>R$ {(valueProduct).toFixed(2)} </Text>
          <Text style={styles.price}> R$ {((item.price))}
          </Text>
        </View>
        <Text style={styles.desc} numberOfLines={4}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
