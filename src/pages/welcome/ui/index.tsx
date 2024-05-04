import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

import { NavigationButton } from "src/features/navigation-button";


export const WelcomePage = ({navigation}: any) => {
    

    return (
        <View style={styles.container}>
            <ImageBackground
                resizeMode="cover"
                style={styles.image}
                source={require('../image/fon.png')}
            >
                <View style={styles.contentContainer}>
                    <Text style={styles.textWelcome}>Welcome</Text>
                    <Text style={styles.textTitle}>Electronic.IO</Text>
                    <Text style={styles.textSubTitle}>We serve you with the best gadgets for your home workspace</Text>
                    <View style={styles.blockButtons}>
                        <NavigationButton
                            title="Browse Show"
                            navigation={navigation}
                            path="HomePage"
                        />
                        <Button onPress={() => navigation.navigate('LoginPage')}>
                            <Text>log in</Text>
                        </Button>
                    </View>
                    
                </View>
            </ImageBackground>
                
            
            
                
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexGrow: 1,
    },
    image: {
        flex: 1
    },
    contentContainer: {
        flex: 1,
        
        justifyContent: 'flex-end',
        padding: 20   
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
    blockButtons: {
        minHeight: 130,
        gap: 10
    }
    
})