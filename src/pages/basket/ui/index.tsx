import React, { useEffect, useState } from "react";
import { Button, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { ScrollView, StyleSheet, View } from "react-native";
import { Cart } from "src/entities/product/ui/cart-view";
import { ActionButtonsProduct } from "src/features/action-button";
import { CounterTotalPrice } from "src/features/total-price";
import { useStateSelector } from "src/shared/hooks";
import { useStateUserAuth } from "features/auth/firebase/state-user";




export const BasketPage = ({navigation}: any) => {
    const width = useWindowDimensions().width
    const cart = useStateSelector(state => state.cartSlice);
    const { initializing, user } = useStateUserAuth();
    const [ disabledCheckOut, setDisabledCheckout ] = useState<boolean>(false)

    const fontSize = width > 420 ? 22 : 16

    if (initializing) return <Text>Loading...</Text>;

    if (!user) {
        return (
            <View style={styles.stateUser}>
                <Text style={[styles.stateUserText, {fontSize: fontSize}]}>Please login user</Text>
                <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>    
                    <Text style={[styles.stateUserLogin, {fontSize: fontSize}]}>Login</Text>
                </TouchableOpacity>
            </View>
            
        );
    }
    
    
    
    return (
        <ScrollView 
            contentContainerStyle={styles.container} 
            showsVerticalScrollIndicator={false} 
            >
                
            <View style={styles.contentContainer}>
                {cart.length === 0 ? (
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={[styles.text, {fontSize: fontSize}]}>Basket empty</Text>
                    </View>
                ) : (
                 cart.map((item, key) => (
                    <Cart 
                        key={key}
                        name={item.name}
                        image={item.img[0]}
                        price={item.price}
                        id={item.id}
                        quantity={item.quantity}
                    />
                ))   
                )}
 
            </View>
            <Button title="order page" onPress={() => navigation.navigate('OrdersPage')}/>        
            <View style={styles.footer}>
                <CounterTotalPrice/>
                <ActionButtonsProduct 
                    title="Proceed to Checkout" 
                    typeButton="continue to pay"
                    action={() => navigation.navigate('CheckOutPage')}
                    disabled={cart.length < 1 ? true : false}
                />
            </View>
            
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    stateUser: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
    stateUserText: {
        fontFamily: 'Avenir-Heavy',
        fontWeight: '900'
    },
    stateUserLogin: {
        fontFamily: 'Avenir-Heavy',
        fontWeight: '900',
        color: 'rgb(186, 92, 61)'
    },
    container: {
        backgroundColor: '#FFF',
        flexGrow: 1,
        padding: 20,
        justifyContent: 'space-between'
    },
    contentContainer: {
        gap: 20,
        flex: 1
    },
    text: {
        fontFamily: "Avenir-Black",
        color: 'black'
    },
    footer: {
        width: '100%',
        paddingVertical: 20,
        alignSelf: 'center',
        gap: 20
    }
    
})