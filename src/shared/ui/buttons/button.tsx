import React from 'react';
import { Text, StyleSheet, Pressable, View } from 'react-native';
import Heart from '../../entities/product/image/heart.svg'
import Basket from './image/basket.svg'

interface Props {
    onPress: () => {} | null | undefined,
    title: string,
    style: object,
    favorites: boolean
}

export default function Button(props:Props) {
  const { onPress, title = 'Save', style, favorites } = props;
  return (
    <Pressable style={props.style} onPress={onPress}>
        { favorites 
            ? <View style={styles.buttonFavorite}>
                    <Heart width={20} height={20}/>
                </View> 
            : <View style={styles.buttonBasket}>
                    <Basket width={24} height={24}/>
                </View> 
        }
        
        <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    buttonFavorite: {
        width: 32,
        height: 32,
        alignItems:"center",
        justifyContent: "center",
        backgroundColor: "#FFF",
        borderRadius: 22,
    },
    buttonBasket: {
        width: 70,
        height: 70,
        alignItems:"center",
        justifyContent: "center",
        backgroundColor: "black",
        borderRadius: 50,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});
