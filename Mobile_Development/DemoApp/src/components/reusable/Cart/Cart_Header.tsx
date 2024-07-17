import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import RText from '../../ui/RText'
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const Cart_Header = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row', gap: 250 }}>
                <RText >Cart</RText>
                <FontAwesome name='ellipsis-h' size={25} color={'gray'} />
            </View>
            <View style={styles.container}>
            <View style={styles.inputContainer}>
                <FontAwesome name='map-marker-alt' size={25} color={'black'} style={styles.icon} />
                <Text style={styles.locationText}>92 High Street, Mbarara</Text>
                <FontAwesome name='angle-right' size={25} color={'black'} style={styles.icon} />
            </View>
        </View>
        </View>
    )
}

export default Cart_Header

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'gray',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    icon: {
        marginHorizontal: 15,
    },
    locationText: {
        flex: 1,
        color: 'white',
    },
})