import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import RText from '../ui/RText';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export interface IProduct {
    id: string,
    item_name: string,
    item_image: string
}



export default function Category() {
    const navigation = useNavigation();
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


    // get/request data

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products/categories');
                setCategories(response.data);
            } catch (error) {
                console.log(error);
            }
        }
    }, [])






    return (
        <ScrollView>
            <View style={styles.categories_header}>
                <RText>Categories</RText>
                <TouchableOpacity style={styles.see_all_wrapper}>
                    <RText fs={13}>See all</RText>
                    <FontAwesome name="angle-right" size={15} color="#888" />
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    data={categories}
                    style={{ marginTop: 10 }}
                    horizontal
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={()=>navigation.navigate('ProductScreen',{product_name:item})}>                           
                                <View style={{ marginRight: 20, backgroundColor: '#888', padding: 10, borderRadius: 20 }}>
                                <Image source={{ uri: item.item_image }} style={{ width: 50, height: 50 }} />
                                <RText>{item.item_name}</RText>
                            </View>
                            </TouchableOpacity>

                        );
                    }}

                    keyExtractor={(item) => item.id}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
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
})