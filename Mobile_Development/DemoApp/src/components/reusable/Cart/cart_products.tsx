import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import RText from '../../ui/RText';
import { ScrollView } from 'react-native-gesture-handler';
import RButton from '../../ui/RButton';
import { Checkbox } from 'react-native-paper';

const cart_products = () => {
    // Category
    const [categories, setCategories] = useState([{
        id: '1',
        item_name: 'Phones',
        item_image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xcir8By24sTDapPk8Y9jsgHaHa%26pid%3DApi&f=1&ipt=8a14f79447431adaf5a8b9189715d26faf68687cf80fe6f7776f529433f0338a&ipo=images',
        item_price: '$699',
    }, {
        id: '2',
        item_name: 'Laptops',
        item_image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.idgesg.net%2Fimages%2Farticle%2F2019%2F10%2Fimg_20191002_133804-100812884-orig.jpg&f=1&nofb=1&ipt=a3f7090722b92ba25eda1b00118f5c172b68d262481ff41ec8bc7447e4765e3e&ipo=images',
        item_price: '$1299',
    }]);

    return (
        <View>
            <View style={styles.wrapper}>
                <View style={styles.selectAllContainer}>
                    <Checkbox status='checked' />
                    <RText>Select all</RText>
                </View>
                <View style={styles.header_right}>
                    <View>
                        <FontAwesome color='gray' size={22} name='sign-out-alt' />
                    </View>
                    <View>
                        <FontAwesome color='gray' size={22} name='pencil-alt' />
                    </View>
                </View>
            </View>
            <FlatList
                style={{ marginTop: 10 }}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.productContainer}>
                            <Checkbox status='checked' />
                            <Image source={{ uri: item.item_image }} style={styles.productImage} />
                            <View style={styles.productDetails}>
                                <RText style={{alignContent:'flex-start', alignItems: 'flex-start'}}>{item.item_name}</RText>
                                <View style={styles.priceContainer}>
                                    <RText>{item.item_price}</RText>
                                    <View style={styles.quantityControls}>
                                        <TouchableOpacity>
                                            <FontAwesome name='minus' size={20} />
                                        </TouchableOpacity>
                                        <RText>1</RText>
                                        <TouchableOpacity>
                                            <FontAwesome name='plus' size={20} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    );
                }}
                data={categories}
                keyExtractor={(item) => item.id}
            />
            <View style={{ marginBottom: 35 }}>
                <RButton text_content='CheckOut'></RButton>
            </View>
        </View>
    )
}

export default cart_products

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 25,
        width: '100%',
    },
    selectAllContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    header_right: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '20%',
        gap: 30,
    },
    productContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: '#888',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
    },
    productImage: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    productDetails: {
        flex: 1,
        alignItems: 'flex-start',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    quantityControls: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginLeft: 50,
    }
});
