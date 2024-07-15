import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import ScreenWrapper from '../components/reusable/ScreenWrapper';

export default function SplashScreen({ navigation }: { navigation: any }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeScreen')
      // navigation.navigate('HomeScreen')
    }, 2000)
      , []
  });


  return (
    <ScreenWrapper custom_styles={{ backgroundColor: 'red' }}>
      <Image style={styles.image_wrapper}
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfbd0BJOd5maqKqCpTi7VzAYapgnPm49YQRNHKHvRPmMmyhcHvaYMAJzWObeAj7Iolu5k&usqp=CAU" }} />
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  image_wrapper: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 50,
  }
})