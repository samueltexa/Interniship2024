import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Product_Image_Wrapper = () => {
  return (
    <View style={{width:'100%', height:'50%'}}>
      <Image source={{uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DSJaNRSDHKrhRbNDsf6koQHaJG%26pid%3DApi&f=1&ipt=1cea2ae5fcdd555dff507d78d740d160d2afecc8d44421480ef4be8cbe45a072&ipo=images'}}
      style={{
        width: '100%',
        height:'90%',
        objectFit: 'contain',
        marginTop: 20,
        borderRadius: 30}}/>
    </View>
  )
}

export default Product_Image_Wrapper

const styles = StyleSheet.create({})