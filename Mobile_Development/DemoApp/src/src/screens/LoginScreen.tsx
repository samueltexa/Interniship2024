import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/reusable/ScreenWrapper';
import RTextInput from '../components/ui/RTextInput';
import RButton from '../components/ui/RButton';
import RText from '../components/ui/RText';

const LoginScreen = ({ navigation }: any) => {
  const handleLogin = () => {
    console.log('login clicked,');
    navigation.navigate('HomeStackScreens');
  };

  const handleForgotPassword = () => {
    console.log('forgot password clicked,');
  }

  return (
    <ScreenWrapper>
      <View style={styles.input_wrapper}>
        <Image
          style={styles.logo_image}
          source={require('../assets/images/logo/logo.png')}
        />
        <RText fs={25} c="#222" custom_styles={{ fontWeight: 'bold' }}>
          Login
        </RText>
        <RTextInput
          placeholderTextColor={'gray'}
          placeholder="Enter your email*"
        />
        <RTextInput
          placeholderTextColor={'gray'}
          placeholder="Enter your password*"
        />

        <RButton text_content="Login" onPress={handleLogin} />
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
