import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '../components/reusable/ScreenWrapper';
import RTextInput from '../components/ui/RTextInput';
import RButton from '../components/ui/RButton';
import RText from '../components/ui/RText';
import axios from 'axios';


const LoginScreen = ({ navigation }: any) => {
  const [isPending, setIspending] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async() => {
    setIspending(true);
    const user_details = {
      email,
      password
    }
    console.log('user_details', user_details);
    setIspending(false);

    // Login Functionality
    try {
      const response = await axios.post('api', user_details);
      console.log('response', response.data);
      // Navigate to the home screen
    } catch (e) {
      console.log(e)
      setIspending(false);
    }

    // Handle validation
    setTimeout(() => {
      navigation.navigate('BottomTabsNavigator');

    })
  }


  // const handleLogin = () => {
  //   console.log('login clicked,');
  //   navigation.navigate('HomeStackScreens');
  // };

  const handleForgotPassword = () => {
    console.log('forgot password clicked,');
  }

  return (
    <ScreenWrapper>
      <View style={styles.input_wrapper}>
        <Image
          style={styles.logo_image}
          source={require('../assets/images/logo.png')}
        />
        <RText fs={25} c="#222" custom_styles={{ fontWeight: 'bold' }}>
          Login
        </RText>
        <RTextInput
          placeholderTextColor={'gray'}
          placeholder="Enter your email*"
          value={email}
          onChangeText={
            val => setEmail(val)}
        />
        <RTextInput
          value={password}
          onChangeText={val => setPassword(val)}
          placeholderTextColor={'gray'}
          placeholder="Enter your password*" secureTextEntry
        />

        <RButton text_content={isPending ? <ActivityIndicator /> : "Login"} onPress={handleLogin} />
        <RText onPress={handleForgotPassword} fs={15} c="darkblue">
          Forgot password?
        </RText>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RText fs={15} ta="center">
            Don't have an account?{' '}
          </RText>
          <Text
            onPress={() => navigation.navigate('RegisterScreen')}
            style={{ color: 'darkblue', fontSize: 15 }}>
            Register
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  input_wrapper: {
    width: '100%',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo_image: {
    width: '25%',
    height: '25%',
    objectFit: 'contain',
  },
});
