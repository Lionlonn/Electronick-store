import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image, Dimensions, useWindowDimensions } from "react-native";
import UsbImage from '../image/usb.svg'
import { ProductItem } from "src/entities/product";
import StarImage from '../image/star.svg'
import { Favorite } from "src/features/favorite";



interface Props {
    item: ProductItem,
    handleToggleFavorite: (product: ProductItem) => void,
    isFavorite: boolean,
    shape: 'box' | 'rect'
}




export const CardProduct = (props: Props) => {
    const {name, category, price, rating, img} = props.item;
    const width = useWindowDimensions().width;

    const cardWidth = (width - 23 * 3) / 2;
    const cardImageWight = (width - 23 * 3) / 3

    

    return (
        <TouchableOpacity style={styles.container}>
            <View style={[props.shape === 'box' 
                ? [styles.wrapperBox, {width: cardWidth}]
                : [styles.wrapperRect, {width: width}],
                
            ]}>
                <View style={styles.cardImage}>
                    <Image 
                        style={[styles.cardImage, {width: cardImageWight, alignSelf: 'center'}]}
                        source={{uri: img}}
                        />
                    <View style={styles.addFaforites}>
                        <Favorite 
                            toggleFavorite={() => {
                                props.handleToggleFavorite(props.item)
                            }}
                            isFavorite={props.isFavorite}/>
                    </View>
                </View>
                
                <View style={[props.shape === 'box' 
                    ? [styles.aboutProduct, {width: (cardWidth - 20), }] 
                    : [styles.aboutRect]]
                    }>
                    
                    {props.shape === 'box' 
                    ? 
                        <View style={styles.infoCard}>
                            <Text style={styles.titleCard}>{name.length > 15 ? `${name.slice(0, 15)}..` : name}</Text>
                            <Text style={styles.priceText}>USD {price}</Text>
                            <View style={styles.blockRating}>
                                <Text style={styles.textRating}>{rating}</Text>
                                <StarImage style={styles.starIcon}/>
                            </View>
                        </View> 
                    :
                        <View style={styles.infoCard}>
                            <Text style={styles.titleCard}>{name.length > 15 ? `${name.slice(0, 20)}..` : name}</Text>
                            <View style={styles.categoryRect}>
                                    <Text style={styles.categoryText}>{category}</Text>
                                    <View style={styles.point}></View>
                                    <View style={styles.blockRatingRect}>
                                        <Text style={styles.textRating}>{rating}</Text>
                                        <StarImage style={styles.starIcon}/>
                                    </View>
                                    
                            </View>
                            <Text style={styles.priceText}>USD {price}</Text>
                        </View>
                    }
                   
                </View>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
    },
    
    wrapperBox: {
        backgroundColor: '#F4F5F7',
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'column',
        gap: 10,
        position: 'relative',
        overflow: 'hidden',
        padding: 10
    },
    cardImage: {   
        borderRadius: 22,
        aspectRatio: 1.5,
        resizeMode: 'contain'
    },
    addFaforites: {
        position: 'absolute',
        right: 0,
        top: 0
    },
    aboutProduct: {
        width: 142,
        height: 77,
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 10,
        
    },
    infoCard: {
        gap: 4
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
    starIcon: {
        top: -1.2
    },

    // RECT Style

    wrapperRect: {
        backgroundColor: '#F4F5F7',
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 16,
        position: 'relative',
        overflow: 'hidden',
        padding: 10
    },
    aboutRect: {
        
    },
    categoryRect: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        position: 'relative'
    },
    categoryText: {
        fontFamily: 'Avenir-Heavy',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 16,
        color: 'rgb(166, 167, 152)',
    },
    point: {
        width: 3,
        height: 3,
        backgroundColor: "#A6A798",
        borderRadius: 22,
        top: -1.5
    },
    blockRatingRect: {
        flexDirection: 'row',
        alignItems:'center',
        gap: 5,
        top: -1.5
    }
})