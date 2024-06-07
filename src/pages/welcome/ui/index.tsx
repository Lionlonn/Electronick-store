import React, { useEffect, useState } from "react";
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { Button } from "react-native-paper";

import { NavigationButton } from "src/features/navigation-button";


export const WelcomePage = ({navigation}: any) => {
    const { width, height } = useWindowDimensions()
    const screenMax = width > 420 
    const defaultSize = 16
    const [ isLandspace, setIsLandspace ] = useState(width > height);
    const test = width > height

    useEffect(() => {
        const onChange = ({window}: any) => {
            setIsLandspace(window.width > window.height);
        }

        const subscription = Dimensions.addEventListener('change', onChange);
        return () => subscription?.remove();
    }, []);
    
    console.log(width, 'WIDTH', height, "HEIGHt")
    return (
        <View style={styles.container}>
            <ImageBackground
                resizeMode="cover"
                style={styles.image}
                source={require('../image/fon.png')}
            >
                <ScrollView contentContainerStyle={styles.contentContainer}>

                    <View style={styles.textContainer}>
                        <Text style={[styles.textWelcome, {fontSize: screenMax ? defaultSize * 1.2 : defaultSize * 0.8}]}>Welcome</Text>
                        <Text style={[styles.textTitle, {fontSize: screenMax ? defaultSize * 3 : defaultSize * 2.4}]}>Electronic.IO</Text>
                        <Text style={[styles.textSubTitle, {fontSize: screenMax ? defaultSize * 1.5 : defaultSize}]}>We serve you with the best gadgets for your home workspace</Text>
                    </View>
                    
                    <View style={test ? styles.sectionButtonLandspace : styles.sectionButton}>
                        <View style={styles.buttonShow}>
                            <NavigationButton
                                title="Browse Show"
                                navigation={navigation}
                                path="HomePage"
                            />
                        </View>
                        
                        <Button onPress={() => navigation.navigate('LoginPage')} style={styles.buttonLogIn}>
                            <Text style={[styles.textLogIn, {fontSize: screenMax ? defaultSize * 1.5 : defaultSize}]}>log in</Text>
                        </Button>
                    </View>
                    
                </ScrollView>
            </ImageBackground>
                
             
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    image: {
        flex: 1,
        
    },
    contentContainer: {
        flex: 1,
        
        justifyContent: 'flex-end',
        padding: 20   
    },
    textContainer: {
        marginBottom: 40,
        gap: 8
    },
    textWelcome: {
        fontFamily: 'Avenir-Heavy',
        fontWeight: '900',
        color: 'rgb(206, 213, 91)'
    },
    textTitle: {
        fontFamily: 'Avenir-Heavy',
        fontWeight: '900',
        color: 'rgb(255, 255, 255)',
    },
    textSubTitle: {
        fontFamily: 'Avenir-Black',
        fontWeight: '600',
        color: 'rgb(221, 221, 219)'
    },
    textLogIn: {
        fontFamily: 'Avenir-Heavy',
        fontWeight: '900',
        color: 'rgb(221, 221, 219)' 
    },
    sectionButton: {
        flex: 0.15,
        gap: 20,
    },
    sectionButtonLandspace: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
    },
    buttonShow: {
        flex: 1

    },
    buttonLogIn: {
        flex: 1
    },
    
})