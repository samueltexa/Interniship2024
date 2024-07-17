import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/reusable/ScreenWrapper';
import RTextInput from '../components/ui/RTextInput';
import RButton from '../components/ui/RButton';
import RText from '../components/ui/RText';

const RegisterScreen = ({navigation}: {navigation: any
}) => {
  const handleRegister = () => {
    console.log('login clicked,');
  };
  return (
    <ScreenWrapper>
      <View style={styles.input_wrapper}>
        <Image
          style={styles.logo_image}
          source={require('../assets/images/logo/logo.png')}
        />
        <RText fs={25} c="#222" custom_styles={{fontWeight: 'bold'}}>
          Register
        </RText>
        <RTextInput
          placeholderTextColor={'gray'}
          placeholder="Enter your username*"
        />
        <RTextInput
          placeholderTextColor={'gray'}
          placeholder="Enter your email*"
        />
        <RTextInput
          placeholderTextColor={'gray'}
          placeholder="Enter your password*"
        />
        <RButton text_content="Register" onPress={handleRegister} />
      </View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <RText fs={15} ta="center">
          Already have an account?{' '}
        </RText>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <RText fs={15} c="darkblue">
            login
          </RText>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default RegisterScreen;

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
