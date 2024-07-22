import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import RText from '../ui/RText'
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const FlashSales = () => {
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
        <ScrollView>
            <View>
                <View style={styles.categories_header}>
                    <RText>Flash Sale</RText>
                    <View style={{ backgroundColor: 'blue', padding: 4, borderRadius: 5 }}>
                        <RText c='black' style={{ padding: 17 }}>0.2:59:23</RText>
                    </View>
                    <TouchableOpacity style={styles.see_all_wrapper}>
                        <RText fs={13}>See all</RText>
                        <FontAwesome name="angle-right" size={15} color="#888" />
                    </TouchableOpacity>
                </View>
            </View>
            {/* Flash sales */}
            <View style={styles.categories_wrapper}>

                <FlatList
                    style={{ padding: 10 }}
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

    )
}
export default FlashSales

const styles = StyleSheet.create({
    categories_header: {
        marginTop: 20,
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
})