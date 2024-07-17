import {
  Image,
  ImageProps,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';

export interface IRImage extends ImageProps {
  img_url: string;
  h?: any;
  w?: any;
}

const RImage = ({img_url, h, w, ...other_props}: IRImage) => {
  return (
    <Image
      {...other_props}
      style={[styles.img, {height: h ? h : '50%', width: w ? w : '50%'}]}
      source={{uri: img_url}}
    />
  );
};

export default RImage;

const styles = StyleSheet.create({
  img: {
    width: '50%',
    height: '50%',
    objectFit: 'contain',
  },
});
