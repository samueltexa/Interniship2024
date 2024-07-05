import { Text, View } from 'react-native';
import Hello from './src/Hello';
import Home from './src/Home';
import { Register } from './src/Register';
import Login from './src/Login';
import { Settings } from './src/Settings';
const App = () => {

  // Functionality and state management
  return (
    <View>
      <Text>Welcome to react Native</Text>
      <Hello/>
      <Home/>
      <Register/>
      <Login/>
      <Settings/>
    </View>
  );
};

export default App;