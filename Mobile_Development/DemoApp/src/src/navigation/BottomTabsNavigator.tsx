import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import OrdersScreen from '../screens/OrdersScreen';
import CartScreen from '../screens/CartScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        header: () => null,
        tabBarIcon: ({size, color, focused}) => {
          let icon_name = '';
          if (route.name === 'Home') {
            icon_name = 'home';
            color = focused? 'green': 'black';
            size = focused ? 25 : 23;
          } else if (route.name === 'Products') {
            icon_name = 'product-hunt';
            color = focused? 'green': 'black';
            size = focused ? 25 : 23;
          } else if (route.name === 'Orders') {
            icon_name = 'reorder';
            color = focused? 'green': 'black';
            size = focused ? 25 : 23;
          } else if (route.name === 'Cart') {
            icon_name = 'shopping-cart';
            color = focused? 'green': 'black';
            size = focused ? 25 : 23;
          } else if (route.name === 'Settings') {
            icon_name = 'settings';
            color = focused? 'green': 'black';
            size = focused ? 25 : 23;
          }

          return route.name === 'Orders' ? (
            <FontAwesome size={size} color={color} name={icon_name} />
          ) : route.name === 'Settings' ? (
            <Feather size={size} color={color} name={icon_name} />
          ) : (
            <FontAwesome5 size={size} color={color} name={icon_name} />
          );
        },
      })}>
      <BottomTabs.Screen name="Home" component={HomeScreen} />
      <BottomTabs.Screen name="Products" component={ProductsScreen} />
      <BottomTabs.Screen name="Orders" component={OrdersScreen} />
      <BottomTabs.Screen name="Cart" component={CartScreen} />
      <BottomTabs.Screen name="Settings" component={SettingsScreen} />
    </BottomTabs.Navigator>
  );
};
