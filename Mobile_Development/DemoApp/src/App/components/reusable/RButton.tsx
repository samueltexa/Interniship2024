import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import React from 'react'


export interface RButton extends TouchableOpacityProps {
    text_content: string
}

const RButton = ({text_content, ...other_props}: RButton) => {
  return (
    <TouchableOpacity
    {...other_props}
     style={{
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        margin: 10,
        width: 100,
        alignItems: 'center'
    }}>
        <Text>{text_content}</Text>
    </TouchableOpacity>
  );
}

export default RButton

const styles = StyleSheet.create({})