import React from "react";
import { Text } from "react-native";
import { ScrollView, StyleSheet, View } from "react-native";
import { Cart } from "src/entities/product/ui/cart-view";
import { ActionButtonsProduct } from "src/features/action-button";
import { CounterTotalPrice } from "src/features/total-price";
import { useStateSelector } from "src/shared/hooks";


export const BasketPage = () => {
    const cart = useStateSelector(state => state.cartSlice);
    
    return (
        <ScrollView 
            contentContainerStyle={styles.container} 
            showsVerticalScrollIndicator={false} 
            >
                
            <View style={styles.contentContainer}>
                {cart.map((item) => (
                    <Cart 
                        name={item.name}
                        image={item.img[0]}
                        price={item.price}
                        id={item.id}
                        quantity={item.quantity}
                    />
            ))} 
            </View>

            <View style={styles.footer}>
                <CounterTotalPrice/>
                <ActionButtonsProduct 
                    title="Proceed to Checkout" 
                    typeButton="continue to pay"
                    action={() => ""}
                />
            </View>
            
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flexGrow: 1,
        padding: 20,
        justifyContent: 'space-between'
    },
    contentContainer: {
        gap: 20
          
    },
    footer: {
        width: '100%',
        paddingVertical: 20,
        alignSelf: 'center',
        gap: 20
    }
    
})