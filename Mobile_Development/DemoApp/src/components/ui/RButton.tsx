import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import React, { ReactNode } from 'react';

export interface IRButton extends TouchableOpacityProps {
  text_content: string | ReactNode;
}

const RButton = ({text_content, ...other_props}: IRButton) => {
  return (
    <TouchableOpacity
      {...other_props}
      style={{
        backgroundColor: 'blue',
        width: '100%',
        padding: '5%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
      }}>
      <Text style={styles.text}>{text_content}</Text>
    </TouchableOpacity>
  );
};

export default RButton;

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
  },
});
