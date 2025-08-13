// ProductPage.jsx
import { useEffect, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import ProductCard from '../../components/cardProducts/cardProduct';
import { styles } from './styles';

export default function ProductPage() {
  const [tab, setTab] = useState('M'); // 'M' | 'F'
  const [men, setMen] = useState([]);
  const [women, setWomen] = useState([]);

  useEffect(() => {
    (async () => {
      const m = await fetch('https://dummyjson.com/products/category/mens-shoes').then(r => r.json());
      setMen(m?.products ?? []);
    })();
  }, []);

  useEffect(() => {
    if (tab !== 'F' || women.length) return;
    (async () => {
      const w = await fetch('https://dummyjson.com/products/category/womens-shoes').then(r => r.json());
      setWomen(w?.products ?? []);
    })();
  }, [tab, women.length]);

  const data = tab === 'M' ? men : women;

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
        data={data}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.cell}>
            <ProductCard item={item} />
          </View>
        )}
      />
    </View>
  );
}
