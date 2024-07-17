import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RText from '../../ui/RText'
import RButton from '../../ui/RButton'

const Product_Bottom_Component = () => {
    return (
            <View style={{height: '50%',width:'100%', alignContent: 'center', justifyContent: 'center'}}>
            <View><RText c='#333' style={{fontWeight:'bold'}}>Lenovo ThinkPad 44</RText></View>
            <View style={{width:'100%', flexDirection: 'row', alignContent: 'center', justifyContent: 'center', gap:30, margin:10}}>
                <View><RText style={[styles.card,{width:'10%'}]}>117 Reviews</RText></View>
                <View><RText style={[styles.card,{width:'30%'}]}>94%</RText></View>
                <View><RText style={[styles.card,{width:'20%'}]} >8 Messages</RText></View>
            </View>
            <View style={{flexDirection:'row', alignContent: 'center', justifyContent: 'center', gap:30, margin:10}}>
                <RText>$699.00</RText>
                <RText>From $699.00 per mont</RText>
            </View>
            <View>
                <RText c='green' numberOfLines={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, vitae, quis quidem reprehenderit iusto laborum sed corrupti officia perferendis iste suscipit vel odit fugiat harum officiis ipsam nisi vero. Beatae!</RText>
            </View>
            <View>
                <RButton text_content='Add to cart'></RButton>
            </View>
            <View>
                <RText>Delivery on 10-5th-October</RText>
            </View>
        </View>
        
    )
}

export default Product_Bottom_Component

const styles = StyleSheet.create({
    card:{
        borderColor:'gray',
        borderWidth:1,
        padding: 8,
        borderRadius: 7,
    }
})