import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import UsbImage from '../image/usb.svg'

export const CardProduct = () => {
    

    return (
        <TouchableOpacity>
            <View style={styles.wrapper}>
                <View style={styles.cardImage}>
                    <UsbImage/>
                </View>
                <View style={styles.aboutProduct}>
                    <Text style={styles.titleCard}>USB 4port Hub</Text>
                    <Text style={styles.priceText}>USD 33.00</Text>
                    <View style={styles.blockRating}>
                        <Text style={styles.textRating}>4.5</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    wrapper: {
        width: 158,
        height: 190,
        backgroundColor: '#F4F5F7',
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'column',
        gap: -5
    },
    cardImage: {   

    },
    aboutProduct: {
        width: 142,
        height: 77,
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 10
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
        paddingTop: 5
    },
    textRating: {
        fontFamily: 'Avenir-Heavy',
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 16,
        color: 'rgb(138, 139, 122)'
    },
})