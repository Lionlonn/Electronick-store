import React from "react";
import { Text } from "react-native";
import { ScrollView, StyleSheet, View } from "react-native";
import { useStateSelector } from "src/shared/hooks";


export const BasketPage = () => {
    const cart = useStateSelector(state => state.cartSlice);
    
    
    
    return (
        <ScrollView style={styles.bacground}>
            <View style={styles.container}>
                {cart.map(item => (
                    <View>
                        <Text>ID: {item.id}</Text>
                        <Text>QUANTITY: {item.quantity}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    bacground: {
        backgroundColor: '#FFF',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
})