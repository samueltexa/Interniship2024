import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import {BottomTabsNavigator} from './BottomTabsNavigator';

const MainStack = createStackNavigator();

export default function StackNavigator() {
  return (
    <MainStack.Navigator screenOptions={{}} initialRouteName="SplashScreen">
      <MainStack.Screen
        name="SplashScreen"
        options={{
          header: () => null,
        }}
        component={SplashScreen}
      />
      <MainStack.Screen
        options={{
          header: () => null,
        }}
        name="LoginScreen"
        component={LoginScreen}
      />
      <MainStack.Screen
        options={{
          header: () => null,
        }}
        name="RegisterScreen"
        component={RegisterScreen}
      />
      <MainStack.Screen
        options={{
          header: () => null,
        }}
        name="WelcomeScreen"
        component={WelcomeScreen}
      />
      <MainStack.Screen
        options={{
          header: () => null,
        }}
        name="HomeStackScreens"
        component={BottomTabsNavigator}
      />
    </MainStack.Navigator>
  );
}
