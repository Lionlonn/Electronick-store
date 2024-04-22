import React from "react";
import { Text } from "react-native";
import { ScrollView, StyleSheet, View } from "react-native";
import { Cart } from "src/entities/product/ui/cart-view";
import { ActionButtonsProduct } from "src/features/action-button";
import { useStateSelector } from "src/shared/hooks";


export const BasketPage = () => {
    const cart = useStateSelector(state => state.cartSlice);
    
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    
    return (
        <ScrollView style={styles.bacground}>
                <View style={styles.container}>
                    {cart.map((item) => (
                        <View style={{marginBottom: 20}}>
                            <Cart 
                                name={item.name}
                                image={item.img[0]}
                                price={item.price}
                                id={item.id}
                                quantity={item.quantity}
                            />
                        </View>
                        
                    ))}
                    <View style={styles.totalPrice}>
                        <Text>Total</Text>
                        <Text>{totalPrice}</Text>
                    </View>

                    <View style={{width: '100%' }}>
                        <ActionButtonsProduct 
                            title="Proceed to Checkout" 
                            typeButton="continue to pay"
                            action={() => ""}
                        />
                    </View>
                    
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
        padding: 20
    },
    totalPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    }
    
})