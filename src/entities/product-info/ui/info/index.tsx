import React from "react";
import { StyleSheet, Text, View} from "react-native";
import { RatingStar } from "src/features/rating-star";

interface Props {
    name: string;
    category: string;
    price: number;
    rating: number;
    info: string;
}



export const ProductInfo = (props: Props) => {
    
    return (
        <View style={styles.container}> 
            <View style={styles.wrapperHeader}>
                <View>
                    <Text style={styles.titleProduct}>{props.name}</Text>
                    <View style={styles.subTitleInfo}>
                        <Text style={styles.textCategory}>{props.category}</Text>
                        <View style={styles.point}></View>
                        <Text style={styles.textRating}>{props.rating}</Text>
                        <View style={styles.ratingImage}>
                            <RatingStar rating={props.rating}/> 
                        </View>
                        
                    </View> 
                </View>
                <View style={styles.rightPrice}>
                    <Text style={styles.textPrice}>${props.price}</Text>
                </View>
            </View>
            
            <Text style={styles.textInfo}>{props.info}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    wrapperHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleProduct: {
        fontFamily: 'Avenir-Heavy',
        fontSize: 21,
        fontWeight: '900',
        lineHeight: 29,
        color: 'black',
        marginBottom: 8
    },
    subTitleInfo: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    textCategory: {
        fontSize: 14,
        fontFamily: 'Avenir-Heavy',
        fontWeight: '500',
        lineHeight: 16, 
        color: 'rgb(166, 167, 152)'


    },
    point: {
        width: 3,
        height: 3,
        borderRadius: 22,
        backgroundColor: 'rgb(166, 167, 152)',
        top: -1
    },
    textRating: {
        color: 'rgb(27, 61, 47)',
        fontSize: 14,
        fontFamily: 'Avenir-Heavy',
        fontWeight: '500',
        lineHeight: 16, 
    },
    ratingImage: {
        top: -2
    },
    rightPrice: {
        backgroundColor: 'rgb(245, 250, 248)',
        width: 'auto',
        height: 'auto',
        borderRadius: 8
    },
    textPrice: {
        padding: 20,
        color: 'rgb(27, 61, 47)',
        fontFamily: 'Avenir-Heavy',
        fontSize: 21,
        fontWeight: '900',
        lineHeight: 29,
    },
    textInfo: {
        color: 'black',
        fontFamily: 'Avenir-Black',
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '400'
    }
})