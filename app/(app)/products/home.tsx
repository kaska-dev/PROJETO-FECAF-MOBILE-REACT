import ButtonLogout from '@/src/components/button-custom/buttomLogout';
import ProductPage from '@/src/screens/productPage/productPage';
import React from 'react';
import { View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ProductPage />
      <ButtonLogout />
    </View>


  );
}
