import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';

export interface IRTextInput extends TextInputProps {
  custom_styles?: ViewStyle;
}

const RTextInput = ({custom_styles, ...other_props}: IRTextInput) => {
  return (
    <TextInput
      {...other_props}
      style={[
        custom_styles,
        {
          borderColor: '#999',
          borderWidth: 1,
          width: '100%',
          borderRadius: 10,
          paddingHorizontal: '5%',
          fontSize: 17,
          color: '#222',
        },
      ]}
    />
  );
};

export default RTextInput;

const styles = StyleSheet.create({});
