import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import ScreenWrapper from '../components/reusable/ScreenWrapper';

const SplashScreen = ({navigation}: {navigation: any}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeScreen');
    }, 8000);
  }, []);

  return (
    <ScreenWrapper
      custom_styles={{
        backgroundColor: 'white',
      }}>
      <Image
        style={styles.logo_image}
        source={require("../assets/images/logo.png")}
      />
    </ScreenWrapper>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  logo_image: {
    width: '40%',
    height: '40%',
    objectFit: 'contain',
    backgroundColor: 'white',
  },
});
