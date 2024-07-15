import { StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle } from 'react-native'
import React from 'react'
import { IRText } from '../reusable/RText'

export interface IRTextInput extends TextInputProps {
    custom_styles?: ViewStyle
}

export default function RTextInput({ custom_styles, ...other_props }: IRTextInput) {
    return (
        <TextInput
            {...other_props}
            style={[custom_styles,
                {
                    borderWidth: 1,
                    borderColor: 'black',
                    borderRadius: 5,
                    padding: 10,
                    margin: 10,
                    width: '90%',
                    height: 40,
                    alignSelf: 'center'
                }

            ]}
        ></TextInput>
    )
}

const styles = StyleSheet.create({})