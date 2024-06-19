import React from "react";
import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import LottieView from 'lottie-react-native'
import { ActionButtonsProduct } from "src/features/action-button";
export const PaidPage = ({navigation}: any) => {
    const width = useWindowDimensions().width
    const fontSize = width > 420 ? 24 * 1.5 : 24

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={[styles.titleText, {fontSize: fontSize}]}>All Done!</Text>
            <LottieView style={{width: '100%', height: 360}} source={{uri:'https://lottie.host/16c8f615-682a-476c-a8ac-91c87c6d0762/UNugjr4sez.json'}} autoPlay loop />
            <View style={styles.buttonWrapper}>
                <ActionButtonsProduct title="Go to orders" action={() => navigation.navigate('HomePage')}/>
            </View>
            
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 40
    },
    titleText: {
        fontFamily: "Avenir-Heavy",
        color: 'black'
    },
    buttonWrapper: {
        width: '100%',
        height: 50
    }
    
})