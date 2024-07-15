import { StyleSheet, Image, ImageProps } from 'react-native'
import React from 'react'

export interface RImages extends ImageProps {
    img_url: string

}

export default function RImage({ img_url } : RImages) {
    return (
        <Image style={styles.img} source={{ uri: img_url }} />
    );
};

const styles = StyleSheet.create({
    img: {

    }
});