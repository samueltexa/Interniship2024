import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/reusable/ScreenWrapper'
import RTextInput from '../components/ui/RTextInput'
import RButton from '../components/reusable/RButton'
import RText from '../components/reusable/RText'

export default function RegisterScreen() {
  const handleRegister = () => {
    console.log('Register button clicked')
  }

  return (
    <ScreenWrapper custom_styles={{
      backgroundColor: 'red'
    }}>
      <Image style={styles.image_wrapper}
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfbd0BJOd5maqKqCpTi7VzAYapgnPm49YQRNHKHvRPmMmyhcHvaYMAJzWObeAj7Iolu5k&usqp=CAU" }} />
        <RText text='Register from here'></RText>
      <View style={styles.input_wrapper}>
      <RTextInput placeholderTextColor={'gray'} placeholder='Enter user name'>
      </RTextInput>
      <RTextInput placeholderTextColor={'gray'} placeholder='Enter password'>
      </RTextInput>  
      <RButton onPress={handleRegister} text_content='Register'></RButton>      
      </View>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  input_wrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image_wrapper: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    marginBottom: 120,
  }
})