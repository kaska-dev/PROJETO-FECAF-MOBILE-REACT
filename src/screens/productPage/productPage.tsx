import { useEffect, useState } from 'react';
import { FlatList, Image, Modal, Pressable, ScrollView, Text, View } from 'react-native';
import ProductCard from '../../components/cardProducts/cardProduct';
import { modalStyles } from './modalStyles';
import { styles } from './styles';

export default function ProductPage() {
  const [tab, setTab] = useState('M');
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const url =
      tab === 'M'
        ? 'https://dummyjson.com/products/category/mens-shoes'
        : 'https://dummyjson.com/products/category/womens-shoes';

    fetch(url)
      .then(r => r.json())
      .then(json => setProducts(json?.products ?? []))
      .catch(() => setProducts([]));
  }, [tab]);

  const openDetails = (item) => {
    setSelected(item);
    setVisible(true);
  };
  const closeDetails = () => {
    setVisible(false);
    setTimeout(() => setSelected(null), 120);
  };

  const money = (n) => `R$ ${Number(n).toFixed(2).replace('.', ',')}`;
  const oldFromDiscount = (p) =>
    p.discountPercentage ? p.price / (1 - p.discountPercentage / 100) : null;

  return (
    <View style={styles.container}>
      <View style={styles.tabsRow}>
        <Pressable style={[styles.tab, tab === 'M' && styles.tabActive]} onPress={() => setTab('M')}>
          <Text style={styles.tabLabel}>Produtos Masculinos</Text>
        </Pressable>
        <Pressable style={[styles.tab, tab === 'F' && styles.tabActive]} onPress={() => setTab('F')}>
          <Text style={styles.tabLabel}>Produtos Femininos</Text>
        </Pressable>
      </View>

      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.cell}>
            <ProductCard item={item} onPress={() => openDetails(item)} />
          </View>
        )}
      />

      <Modal visible={visible} animationType="slide" transparent>
        <View style={modalStyles.backdrop}>
          <View style={modalStyles.sheet}>
            <View style={modalStyles.header}>
              <Pressable onPress={closeDetails} hitSlop={10}>
                <Text style={modalStyles.back}>«</Text>
              </Pressable>
            </View>

            {selected && (
              <ScrollView contentContainerStyle={modalStyles.content}>
                <Image
                  source={{ uri: selected.thumbnail || selected.images?.[0] }}
                  style={modalStyles.hero}
                />
                <Text style={modalStyles.title}>{selected.title}</Text>

                <View style={modalStyles.priceRow}>
                  <Text style={modalStyles.price}>{money(selected.price)}</Text>
                  {oldFromDiscount(selected) && (
                    <Text style={modalStyles.oldPrice}>{money(oldFromDiscount(selected))}</Text>
                  )}
                </View>

                <Text style={modalStyles.desc}>{selected.description}</Text>
              </ScrollView>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}
