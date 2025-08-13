import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB',
  },
  list: {
    padding: 16,
    gap: 12,
  },
  card: {
    width: 150,
    backgroundColor: '#FFF',
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#a6a6a6ff',
    margin: 7
  },
  thumb: {
    width: "auto",
    height: 180,
    backgroundColor: '#6b4343ff',
    borderColor: '#a6a6a6ff',
    borderBottomColor: '#000',
    borderRadius: 10
  },
  info: {
    flex: 1,
    padding: 12,
    gap: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  price: {
    fontSize: 13,
    color: 'gray',
    fontWeight: '800',
    textDecorationLine: 'line-through'
  },

  desc: {
    fontSize: 12,
    color: '#555',
  },
  priceDesc: {
    fontSize: 14,
    color: 'red',
    fontWeight: '800',
  }
});
