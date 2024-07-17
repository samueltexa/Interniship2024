import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '../Screens/SplashScreen';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import BottomTabsNavigator from './BottomTabsNavigator';

const MainStack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <MainStack.Navigator initialRouteName='SplashScreen'>
            <MainStack.Screen name="SplashScreen" options={{ header: () => null }} component={SplashScreen} />
            <MainStack.Screen name="LoginScreen" component={LoginScreen} />
            <MainStack.Screen name="RegisterScreen" component={RegisterScreen} />
            <MainStack.Screen name="WelcomeScreen" options={{ header: () => null }} component={WelcomeScreen} />
            <MainStack.Screen name="BottomTabNavigator" component={BottomTabsNavigator} />
        </MainStack.Navigator>
    )
}