import { View, Text, StyleSheet, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'

export default function ScreenWrapper({children, custom_styles}: {children: ReactNode, custom_styles?: ViewStyle}) {
  return (
    <View style={styles.wrapper}>{children}</View>
  )
}

const styles = StyleSheet.create({
    wrapper:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        padding: '10%',
    },
    custom_styles: {
        backgroundColor: 'red'
    }
})