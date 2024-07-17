import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/reusable/ScreenWrapper'
import RText from '../components/reusable/RText'
import RButton from '../components/reusable/RButton'

export default function WelcomeScreen({ navigation }: { navigation: any }) {
  return (
    <ScreenWrapper>

      <Image style={styles.image_wrapper}
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfbd0BJOd5maqKqCpTi7VzAYapgnPm49YQRNHKHvRPmMmyhcHvaYMAJzWObeAj7Iolu5k&usqp=CAU" }} />

      <RText text='Welcome Screen' custom_styles={{ fontSize: 20 }}></RText>
      <RButton onPress={() => navigation.navigate('LoginScreen')} text_content='Welcome'></RButton>
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