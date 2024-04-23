import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useStateSelector } from "src/shared/hooks";


export const CounterTotalPrice = () => {
    const cart = useStateSelector(state => state.cartSlice);
    
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    
    return (
            <View style={styles.totalPrice}>
                <Text>Total</Text>
                <Text>{totalPrice}</Text>
            </View>
    )
}


const styles = StyleSheet.create({
    
    totalPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    }
    
})