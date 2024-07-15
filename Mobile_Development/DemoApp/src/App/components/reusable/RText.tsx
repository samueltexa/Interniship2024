import { StyleSheet, Text, TextStyle, View } from 'react-native'
import React, { ReactNode } from 'react'
import { TextProps } from 'react-native-paper'

export interface IRText extends TextProps<any>{
  children: ReactNode
  custom_styles: TextStyle
  c: string
}

export default function RText({c, children, custom_styles, ...other_props} : IRText) {
  return (
      <Text {...other_props} style={[custom_styles,{color: c ? c: '#666'}]}>{children}</Text>
  )
}

const styles = StyleSheet.create({})