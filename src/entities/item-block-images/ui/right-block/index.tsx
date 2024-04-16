import React from "react";
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Swiper from 'react-native-swiper'
import {Dimensions} from 'react-native';

interface Props {
   images: string[];
   onImageIndex: (index: number) => void;
}

const windowHeight = Dimensions.get('window').height;

export const RightItemImageBlock = (props: Props) => {
   
   return (
    <View style={styles.container}>
        {props.images.map((img, index) => (
            <TouchableOpacity 
                style={styles.wrapper}
                onPress={() => props.onImageIndex(index)}
                >
                <Image
                    style={styles.image}
                    source={{
                        uri: img
                    }}
                />
            </TouchableOpacity>
        ))}
    </View>
   )
}

const styles = StyleSheet.create({
    container: {
        gap: 6
    },
    wrapper: {
        borderWidth: 2,
        borderColor: '0.6px solid rgb(186, 92, 61)',
        padding: 5,
        borderRadius: 8,
        alignSelf: 'center',
        backgroundColor: 'white'
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 8
    }
})