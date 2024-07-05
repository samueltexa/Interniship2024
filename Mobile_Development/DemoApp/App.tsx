import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Hello from './src/Hello';
import Home from './src/Home';
import { Register } from './src/Register';
import Login from './src/Login';
import { Settings } from './src/Settings';
import { useState } from 'react';
import Logs from './src/Logs';
const App = () => {

  // let username = 'John'

  const [username, setUsername] = useState<any>('');

  const handleInputchange = (val: string) => {
    setUsername(val)
    console.log(username);

  }

  // Functionality and state management
  return (
    <View style={styles.screen_wrapper}>
      {/* <Text style={styles.text}>Welcome to react Native</Text>
      <Image style={styles.image} source={{ uri: "https://www.nationsonline.org/maps/Political-World-Map-3360.jpg" }} />
      <TextInput style={styles.input_wrapper} placeholder='Enter your name' />
      <View style={styles.button}>
        <Button title='Submit' />
      </View>
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.textButton}>Register</Text>
      </TouchableOpacity>
      <ScrollView style={styles.scrollText}>
        <Text style={styles.text_content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor delectus iste distinctio rem non consectetur voluptate ut vitae molestias! Reprehenderit reiciendis voluptatibus adipisci optio, vitae iure quia praesentium. Debitis!</Text>
      </ScrollView>
      <Login username = {'John'}/>
      <TextInput onChange={(e) => handleInputchange(e.nativeEvent.text)} value={username} style={styles.input_wrapper}>
      
      </TextInput> */}
      <Logs/>
    </View>
  );
};

const styles = StyleSheet.create({
  // screen_wrapper: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: '#aaa',
  //   height: '100%',
  // },
  text: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',

  },
  image: {
    width: 200,
    height: 200,
    objectFit: 'cover',
  },
  input_wrapper: {
    width: 300,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 5,
    marginTop: 20,
    padding: 10,
  },
  button: {
    width: 300,
    marginTop: 20,
  },
  optionButton: {
    backgroundColor: 'blue',
    width: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 5,
  },
  textButton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollText:{
    marginTop: 30,
    backgroundColor: 'green',
  },
  text_content:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }

})
export default App;