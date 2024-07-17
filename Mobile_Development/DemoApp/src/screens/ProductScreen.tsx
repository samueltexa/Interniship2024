import { StyleSheet} from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/reusable/ScreenWrapper'
import Product_Header from '../components/reusable/Product/Product_Header'
import Product_Image_Wrapper from '../components/reusable/Product/Product_Image_Wrapper'
import Product_Bottom_Component from '../components/reusable/Product/Product_Bottom_Component'

const ProductScreen = () => {
  return (
    <ScreenWrapper isScrollable custom_styles={styles.container}>
      <Product_Header/>
      <Product_Image_Wrapper/>
      <Product_Bottom_Component/>
    </ScreenWrapper>
  )
}
export default ProductScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
    height: '100%',
  }
})