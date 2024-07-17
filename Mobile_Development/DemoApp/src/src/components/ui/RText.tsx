import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import React, {ReactNode} from 'react';

export interface IRText extends TextProps {
  children: ReactNode;
  custom_styles?: TextStyle;
  c?: string;
  fs?: number | undefined;
  ta?: 'center' | 'auto' | 'left' | 'right' | 'justify' | undefined;
}

const RText = ({
  c,
  fs,
  ta,
  children,
  custom_styles,
  ...other_props
}: IRText) => {
  return (
    <Text
      {...other_props}
      style={[
        custom_styles,
        {
          color: c ? c : '#666',
          fontSize: fs ? fs : 17,
          textAlign: ta ? ta : 'center',
          fontWeight: '500',
        },
      ]}>
      {children}
    </Text>
  );
};

export default RText;

const styles = StyleSheet.create({});
