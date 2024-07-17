import { ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Product_Header = () => {
  // added to favourites
  const [favourite, setFavourite] = useState(false)

  const handleFavourite = () => {
    setFavourite(!favourite)
  }

  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={{ backgroundColor: 'transparent' }}>
          <FontAwesome style={{ width: 30, height: 20, justifyContent: 'center', alignItems: 'center' }} color={'#888'} size={15} name='angle-left' />
        </View>
      </TouchableOpacity>

      <View style={styles.header_right}>
        <TouchableOpacity onPress={handleFavourite}>
          <View>
            <AntDesign color={favourite? 'red' :'gray'} size={22} name={favourite? 'heart' :'hearto'} />
          </View>
        </TouchableOpacity>
        <View>
          <AntDesign color='gray' size={22} name='logout' />
        </View>
      </View>
    </View>
  )
}
export default Product_Header

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
  },
  header_right: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '20%',
    gap: 30,
  }
})