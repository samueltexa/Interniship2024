import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/reusable/ScreenWrapper';
import Cart_Header from '../components/reusable/Cart/Cart_Header';
import Cart_Products from '../components/reusable/Cart/cart_products';

const CartScreen = () => {
  return (
    <ScreenWrapper custom_styles={styles.wrapper}>
      <Cart_Header />
      <Cart_Products />
    </ScreenWrapper>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  wrapper: {
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    height: '100%',
  },
});
