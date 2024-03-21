import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image, Dimensions, useWindowDimensions } from "react-native";
import UsbImage from '../image/usb.svg'
import { ProductItem } from "src/entities/product";
import StarImage from '../image/star.svg'
import { Favorite } from "src/features/favorite";



interface Props {
    item: ProductItem,
    handleToggleFavorite: (product: ProductItem) => void,
    isFavorite: boolean
}






export const CardProduct = (props: Props) => {
    const {name, category, id, price, rating, img} = props.item;
    const { height, width } = useWindowDimensions();

    const cardWidth = (width - 23 * 3) / 2;
    const cardHeight = width * 1.5;
    const cardImageWight = (width - 23 * 3) / 3

    return (
        <TouchableOpacity style={styles.container}>
            <View style={[styles.wrapper,
                {
                    width: cardWidth,
                }
            ]}>
                <View style={styles.cardImage}>
                    <Image 
                        style={[styles.cardImage, {width: cardImageWight, alignSelf: 'center'}]}
                        source={{uri: img}}
                        />
                </View>
                <View style={styles.addFaforites}>
                    <Favorite 
                        toggleFavorite={() => {
                            props.handleToggleFavorite(props.item)
                        }}
                        isFavorite={props.isFavorite}/>
                </View>
                <View style={styles.aboutProduct}>
                    <Text style={styles.titleCard}>{name}</Text>
                    <Text style={styles.priceText}>USD {price}</Text>
                    <View style={styles.blockRating}>
                        <Text style={styles.textRating}>{rating}</Text>
                        <StarImage/>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        // flex: 1
    },
    wrapper: {
        // width: 171,
        // height: 188 ,
        // width: 158,
        // height: 190,
        backgroundColor: '#F4F5F7',
        borderRadius: 8,
        alignItems: 'center',
        // justifyContent: 'center',
        // flexDirection: 'column',
        // gap: -5,
        position: 'relative',
        overflow: 'hidden',
        padding: 10
    },
    cardImage: {   
        // width: 300,
        borderRadius: 22,
        aspectRatio: 1.5,
        resizeMode: 'contain'
    },
    addFaforites: {
        position: 'absolute',
        right: 10,
        top: 10
    },
    aboutProduct: {
        width: 142,
        height: 77,
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 10,
        
    },
    titleCard: {
        fontFamily: 'Avenir-Heavy',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 22,
        color: 'black'
    },
    priceText: {
        fontFamily: 'Avenir-Heavy',
        fontSize: 12,
        fontWeight: '800',
        lineHeight: 16,
        color: 'rgb(186, 92, 61)',
    },
    blockRating: {
        alignSelf: 'flex-end',
        paddingTop: 5,
        flexDirection: 'row',
        alignItems:'center',
        gap: 5
    },
    textRating: {
        fontFamily: 'Avenir-Heavy',
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 16,
        color: 'rgb(138, 139, 122)'
    },
})