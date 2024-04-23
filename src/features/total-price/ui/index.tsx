import React from "react";
import { StyleSheet, View, Text, useWindowDimensions } from "react-native";
import { useStateSelector } from "src/shared/hooks";


export const CounterTotalPrice = () => {
    const cart = useStateSelector(state => state.cartSlice);
    const defaultSize = 16;
    const width = useWindowDimensions().width;
    const totalPrice = (cart.reduce((acc, item) => acc + item.price * item.quantity, 0)).toFixed(2);
    
    return (
            <View style={styles.totalPrice}>
                <Text style={[
                    styles.textTotal,
                    {fontSize: width > 420 ? defaultSize * 1.4 : defaultSize}
                    ]}>Total</Text>
                <Text style={[
                    styles.textPrice,
                    {fontSize: width > 420 ? defaultSize * 1.4 : defaultSize}
                ]}>${totalPrice}</Text>
            </View>
    )
}


const styles = StyleSheet.create({
    
    totalPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    textTotal: {
        color: 'black',
        fontFamily: 'Avenir-Black',
        fontWeight: '800'
    },
    textPrice: {
        color: 'rgb(186, 92, 61)',
        fontWeight: '800',
        fontFamily: 'Avenir-Black'
    }
    
})