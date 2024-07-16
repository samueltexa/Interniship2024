import 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
// import LoginScreen from './Screens/LogInScreen';
import { NavigationContainer } from '@react-navigation/native';
import  StackNavigator  from './src/src/navigation/StackNavigator';


const App = () => {
  // Functionality and state management

  return (
    // <View style={styles.container}> 
    //   {/* <StackNavigators/> */}
    //   <LoginScreen/>
    // </View>
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
})

export default App;