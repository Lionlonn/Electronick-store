import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Chair from '../image/chair.svg'
import Cart from '../image/cart.svg'
import RatingImage from "../../product/image/star.svg"
import { Button } from "src/shared/ui";
import LinearGradient from 'react-native-linear-gradient';

export const PopularCard = () => {
    return (
        <View style={styles.cardContainer}>
            <LinearGradient 
                colors={['rgb(0, 2, 2)', 'rgb(35, 35, 35)', 'rgb(31, 31, 31)', 'rgb(35, 35, 35)']}
                style={styles.linearGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                >
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
            </LinearGradient>
            
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 32,
        flexDirection: 'row',
        position: 'relative',
    },
    linearGradient: {
        
        minWidth: '90%',
        height: 180,
        borderRadius: 32,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        position: 'relative'
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