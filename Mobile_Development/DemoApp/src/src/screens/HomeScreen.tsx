import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcones from 'react-native-vector-icons/MaterialIcons';
import RText from '../components/ui/RText';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = () => {
  // Category
  const [categories, setCategories] = useState([{
    id: '1',
    item_name: 'Phones',
    item_image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xcir8By24sTDapPk8Y9jsgHaHa%26pid%3DApi&f=1&ipt=8a14f79447431adaf5a8b9189715d26faf68687cf80fe6f7776f529433f0338a&ipo=images',
  }, {
    id: '2',
    item_name: 'Laptops',
    item_image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.idgesg.net%2Fimages%2Farticle%2F2019%2F10%2Fimg_20191002_133804-100812884-orig.jpg&f=1&nofb=1&ipt=a3f7090722b92ba25eda1b00118f5c172b68d262481ff41ec8bc7447e4765e3e&ipo=images',
  }, {
    id: '3',
    item_name: 'Tablets',
    item_image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JirqTuPxHCmut44LRRmjnQHaGK%26pid%3DApi&f=1&ipt=78dedb1ecc39c91621ac4db53e7817c21243a658ee4367449f3cf1cc39a3b61d&ipo=images',
  }, {
    id: '4',
    item_name: 'Watches',
    item_image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pPTAvCju3qLb6H6rwQGWRgHaHa%26pid%3DApi&f=1&ipt=86a01c4ebdf72b92944bdb60f17a59f7aaa6f25ba0d2b69f9749caf7b1a749d7&ipo=images',
  }, {
    id: '5',
    item_name: 'Cameras',
    item_image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.0z4ipxElK0jsX8XWrkH3TwHaHa%26pid%3DApi&f=1&ipt=c3b8eb701b7d19f1ea4009fb059365c7939df69a95147fe576f39c22cbdc5d9f&ipo=images',
  }]);

  // Sales
  const [sales, setSales] = useState([{
    id: '1',
    sale_name: 'Apple iPhone 15 Pro\n128GB Natural Titanium\n$699.00',
    sale_image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DSJaNRSDHKrhRbNDsf6koQHaJG%26pid%3DApi&f=1&ipt=1cea2ae5fcdd555dff507d78d740d160d2afecc8d44421480ef4be8cbe45a072&ipo=images',
  }, {
    id: '2',
    sale_name: 'Sumsung galaxy Buds Pro\nTrue Wireless Black\n$69.00',
    sale_image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZTFS93vkliZ046wnsrf6pAHaJ3%26pid%3DApi&f=1&ipt=b8d9d779666f6f598fb46808abb6cb251109eaebbad86741aeae90121502d564&ipo=images',
  },]);






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
        <View style={styles.categories_header}>
          <RText>Categories</RText>
          <TouchableOpacity style={styles.see_all_wrapper}>
            <RText fs={13}>See all</RText>
            <FontAwesome name="angle-right" size={15} color="#888" />
          </TouchableOpacity>
        </View>
        <FlatList
          style={{ marginTop: 10 }}
          horizontal
          renderItem={({ item }) => {
            return (
              <View style={{ marginRight: 20, backgroundColor: '#888', padding: 10, borderRadius: 20 }}>
                <Image source={{ uri: item.item_image }} style={{ width: 50, height: 50 }} />
                <RText>{item.item_name}</RText>
              </View>
            );
          }}
          data={categories}
          keyExtractor={(item) => item.id}
        />
      </View>
      {/* Flash sales */}
      <View style={styles.categories_wrapper}>
        <View style={styles.categories_header}>
          <RText>Flash Sale</RText>
          <View style={{ backgroundColor: 'green', padding: 4, borderRadius: 5 }}>
            <RText c='black' style={{ padding: 17 }}>0.2:59:23</RText>
          </View>
          <TouchableOpacity style={styles.see_all_wrapper}>
            <RText fs={13}>See all</RText>
            <FontAwesome name="angle-right" size={15} color="#888" />
          </TouchableOpacity>
        </View>
        <FlatList
          style={{ marginTop: 10, padding: 10 }}
          horizontal
          renderItem={({ item }) => {
            return (
              <View style={{ marginRight: 20, backgroundColor: '#888', padding: 10, borderRadius: 10 }}>
                <Image source={{ uri: item.sale_image }} style={{ width: 150, height: 200, borderRadius: 10 }} />
                <RText>{item.sale_name}</RText>
              </View>
            );
          }}
          data={sales}
          keyExtractor={(item) => item.id}
        />
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