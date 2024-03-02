import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Chair from '../image/chair.svg'
import Cart from '../image/cart.svg'
import RatingImage from "../../product/image/star.svg"
import { Button } from "src/shared/ui";

export const PopularCard = () => {


    return (
        <View style={styles.cardContainer}>
            <View style={styles.aboutPopular}>

                <Text style={styles.titleStyle}>Adjustable Office{"\n"}Chair</Text>

                <View style={styles.aboutPopularText}>
                    <Text style={styles.text}>Hughlan Workspaces</Text>
                    <View style={styles.icon}></View>
                    <Text style={styles.textRating}>4.8</Text>
                    <RatingImage/>
                </View>

                <View style={styles.buttons}>
                    <Button type="Viev item" buttonColor="yellow" onClick={() => console.log('ckick')}/>
                    <Pressable onPress={() => console.log('cart')}>
                        <Cart style={{width: 10, height: 10}}/>
                    </Pressable>
                </View>

            </View>
            
            <Chair style={styles.imageStyle}/>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '90%',
        height: 190,
        backgroundColor: "#0A0B02",
        borderRadius: 32,
        flexDirection: 'row',
        position: 'relative',
    },
    aboutPopular: {
        padding: 25,
        gap: 10
    },
    titleStyle: {
        color: "#FFF",
        fontFamily: "Avenir-Black",
        fontWeight: '900',
        fontSize: 21
    },
    aboutPopularText: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    text: {
        fontFamily: 'Avenir-Black',
        color: "#A9A9A9",
        fontSize: 12,
        fontWeight: '500'
    },
    textRating: {
        color: "#FFF",
        fontSize: 12,
        fontWeight: '500'
    },
    icon: {
        width: 3,
        height: 3,
        backgroundColor: "#A6A798",
        borderRadius: 22
    },
    buttons: {
        flexDirection: 'row',
        gap: 10
    },
    imageStyle: {
        position: 'absolute',
        right: 20,
        top: -40
    }
})