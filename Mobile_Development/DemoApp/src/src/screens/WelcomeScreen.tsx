import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/reusable/ScreenWrapper';
import RText from '../components/ui/RText';
import RButton from '../components/ui/RButton';

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <ScreenWrapper>
      <Image
        style={styles.logo_image}
        source={require('../assets/images/logo/logo.png')}
      />
      <RText
        fs={35}
        custom_styles={{
          fontWeight: 'bold',
        }}>
        Welcome
      </RText>
      <RText>Ready to start shopping, register and get started</RText>
      <RButton
        onPress={() => navigation.navigate('RegisterScreen')}
        text_content="Register"
      />

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

export default WelcomeScreen;

const styles = StyleSheet.create({
  logo_image: {
    width: '50%',
    height: '50%',
    objectFit: 'contain',
  },
});
