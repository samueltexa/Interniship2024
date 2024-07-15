import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/reusable/ScreenWrapper'
import RTextInput from '../components/ui/RTextInput'

export default function LoginScreen() {
  return (
    <ScreenWrapper>
      <RTextInput placeholder='Enter user name'>
      </RTextInput>

    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({})