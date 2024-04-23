import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";


export const WelcomePage = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                resizeMode="cover"
                style={styles.image}
                source={require('../image/fon.png')}
            >
                <View>
                    <Text>Welcome</Text>
                    <Text>Electronic.IO</Text>
                    <Text>We serve you with the best gadgets for your home workspace</Text>
                </View>
            </ImageBackground>
                
            
            
                
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1
    }
    
})