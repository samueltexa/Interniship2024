import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import ProductScreen from '../Screens/ProductScreen';
import CartScreen from '../Screens/CartScreen';
import SettiingsScreen from '../Screens/SettiingsScreen';
import FontAwsome5 from 'react-native-vector-icons/FontAwesome5';

const Tabs = createBottomTabNavigator();

export const BottomTabsNavigator = () => {

  return (
    <Tabs.Navigator initialRouteName='BottomTabNavigator' screenOptions={({route})=>({
        tabBarIcon: ({focused, color, size}) => {
            let icon_name = '';
            if(route.name === 'Home'){
                icon_name = "home" 
                color = focused? 'red': 'black';
            }else if(route.name === 'Products'){
                icon_name = "product-hunt" 
                color = focused? 'red': 'black';
            }
            else if(route.name === 'Order'){
                icon_name = "reorder";
                color = focused? 'red': 'black';
            }
            else if(route.name === 'Cart'){
                icon_name = "shopping-cart" 
                color = focused? 'red': 'black';
            }
            else if(route.name === 'SettingsScreen'){
                icon_name = "" 
                color = focused? 'red': 'black';
            }
            return <FontAwsome5 name={icon_name} size={size} color={color} />
        }
    })}>
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Products" component={ProductScreen} />
      <Tabs.Screen name="Order" component={CartScreen} />
      <Tabs.Screen name="Cart" component={CartScreen} />
      <Tabs.Screen name="Settings" component={SettiingsScreen} />
    </Tabs.Navigator>
  );
}

export default BottomTabsNavigator

const styles = StyleSheet.create({})