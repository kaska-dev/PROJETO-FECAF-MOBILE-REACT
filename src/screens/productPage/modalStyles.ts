import { StyleSheet } from 'react-native';

export const modalStyles = StyleSheet.create({
  backdrop: {
    flex: 1,
    width: 'auto',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.71)',
  },
  sheet: {
    backgroundColor: '#fff',
  },
  header: {
    borderBottomColor: '#eee',
  },
  back: { 
    fontSize: 40,
    margin: 10
  },

  content: { 
    padding: 16, 
    gap: 12 },

  hero: { 
    width: '100%', 
    height: 220, 
    resizeMode: 'contain' 
  },

  title: {
     fontSize: 20, 
     fontWeight: '800', 
     color: '#111827' },

  priceRow: { 
    flexDirection: 'row', 
    alignItems: 'baseline', 
    gap: 8 },

  price: 
  { fontSize: 18, 
    fontWeight: '800', 
    color: '#DC2626' 
  },
  oldPrice: { 
    fontSize: 14, color: '#6B7280', 
    textDecorationLine: 'line-through' 
  },

  desc: { 
    fontSize: 14, 
    color: '#374151', 
    lineHeight: 20 },
});
