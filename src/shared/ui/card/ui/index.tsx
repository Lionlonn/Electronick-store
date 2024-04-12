import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image, Dimensions, useWindowDimensions } from "react-native";
import UsbImage from '../image/usb.svg'
import { ProductItem } from "src/entities/product";
import StarImage from '../image/star.svg'
import { FavoriteProps } from "src/features/favorite/ui";



interface Props {
    item: ProductItem;
    shape: 'box' | 'rect';
    rightTopSlot: React.ReactNode;
    navigation: any
}


const baseFontSIze = 14

export const CardProduct = (props: Props) => {
    const {name, category, price, rating, img} = props.item;
    const width = useWindowDimensions().width;

    const cardWidth = (width - 23 * 3) / 2;
    const cardImageWight = (width - 23 * 3) / 3

    const sizeM = (width > 420)
    const responsePositionIconStar = sizeM ?  -2.5 : -1.2

    const openProduct = () => {
        
    }
    
    return (
        <TouchableOpacity style={styles.container} onPress={() => {props.navigation.navigate('ViewItem')}}>
            <View style={[
                props.shape === 'box' 
                ? [styles.wrapperBox, {width: cardWidth}]
                : [styles.wrapperRect, {minWidth: '90%'}],
                
            ]}>
                <View style={styles.cardImage}>
                    <Image 
                        style={[styles.cardImage, {width: cardImageWight, alignSelf: 'center'}]}
                        source={{uri: img}}
                        />
                    <View style={styles.addFaforites}>
                        {props.rightTopSlot}
                    </View>
                </View>
                
                <View style={[
                    props.shape === 'box' 
                    ? [styles.aboutBox, {width: (cardWidth - 20), }] 
                    : [styles.aboutRect]]
                    }>
                    
                    {props.shape === 'box' 
                    ? 
                        <View style={styles.infoCard}>
                            <Text style={[styles.titleCard, {fontSize: sizeM ? baseFontSIze * 1.6 : baseFontSIze * 1.3}]}>
                                {name.length > 15 ? `${name.slice(0, 15)}..` : name}
                            </Text>
                            <Text style={[
                                styles.priceText,
                                {
                                    fontSize: sizeM ? baseFontSIze * 1.15 : baseFontSIze * 0.9
                                }
                                ]}>
                                    USD {price}
                                </Text>
                            <View style={styles.blockRating}>
                                <Text style={[
                                    styles.textRating,
                                    {
                                        fontSize: sizeM ? baseFontSIze : baseFontSIze * 0.9 
                                    }
                                    ]}>
                                        {rating}
                                    </Text>
                                <StarImage style={{top: responsePositionIconStar}}/>
                            </View>
                        </View> 
                    :
                        <View style={styles.infoCard}>
                            <Text style={[styles.titleCard, {fontSize: sizeM ? baseFontSIze * 1.6 : baseFontSIze * 1.3}]}>
                                {(width > 420) 
                                ? name.length < 30 ? name : `${name.slice(0, 40)}..`
                                : name.length > 15 ? `${name.slice(0, 20)}..` : name
                                }
                            </Text>
                            <View style={styles.categoryRect}>
                                    <Text style={[
                                        styles.categoryText,
                                        {
                                            fontSize: sizeM ? baseFontSIze * 1.5: baseFontSIze * 1.1,
                                            lineHeight: sizeM ? baseFontSIze * 1.5: baseFontSIze * 1.1
                                        }
                                        ]}>{category}</Text>
                                    <View style={styles.point}></View>
                                    <View style={styles.blockRatingRect}>
                                        <Text style={[
                                            styles.textRating,
                                            {
                                                fontSize:  sizeM ? baseFontSIze : baseFontSIze * 0.9 
                                            }
                                            ]}>
                                                {rating}
                                        </Text>
                                        <StarImage style={{top: responsePositionIconStar}}/>
                                    </View>
                                    
                            </View>
                            <Text style={[
                                styles.priceText, 
                                {
                                    fontSize: sizeM ? baseFontSIze * 1.15 : baseFontSIze * 0.9
                                }
                                ]}>
                                    USD {price}
                                </Text>
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
    aboutBox: {
        width: '100%',
        height: 'auto',
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
        lineHeight: 24,
        color: 'black',
        
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