import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcones from 'react-native-vector-icons/MaterialIcons';
import RText from '../components/ui/RText';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Category from '../components/reusable/Category';
import FlashSales from '../components/reusable/FlashSales';

const HomeScreen = () => {
  
  return (
    <ScrollView contentContainerStyle={styles.screen_wrapper}>
      {/* Header */}
      <View style={styles.header_wrapper}>
        {/* Settiings */}
        <View style={styles.settings_wrapper}>
          <AntDesign name="setting" size={24} color="black" />
        </View>
        {/* Address */}
        <View style={styles.address_wrapper}>
          <RText numberOfLines={1} c='#bbb'>Delivery Address</RText>
          <RText numberOfLines={1}>94 High Street, Mbarara</RText>
        </View>
        {/* Notifications */}
        <View style={styles.notifications_wrapper}>
          <MaterialIcones name="notifications" size={24} color="black" />
        </View>
      </View>
      {/* Search items */}
      <View style={styles.search_wrapper}>
        <AntDesign name="search1" size={20} color="#aaa" />
        <TextInput style={styles.search_input} placeholder='Search items...' placeholderTextColor={'#aaa'}>
        </TextInput>
      </View>
      {/* Categories */}
      <View style={styles.categories_wrapper}>

        {/* Category */}
        <Category/>
        <FlashSales/>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen_wrapper: {
    width: '100%',
    height: '100%',
    paddingHorizontal: '8%',
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  settings_wrapper: {
    backgroundColor: 'blue',
    borderRadius: 50,
    padding: '3%',
  },
  header_wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  address_wrapper: {
    gap: 2,
    width: '60%',
  },
  notifications_wrapper: {
    backgroundColor: '#ccc',
    padding: '3%',
    borderRadius: 50,
  },
  search_wrapper: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#ccc',
    width: '100%',
    paddingHorizontal: '2%',
    borderRadius: 15,
    marginTop: '6%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search_input: {
    fontSize: 17,
    color: '#222',
  },
  categories_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  see_all_wrapper: {
    flexDirection: 'row',
    gap: 10,
  },
  categories_wrapper: {
    marginTop: '6%',
  },
  time_wrapper: {
    color: 'green'
  }
});