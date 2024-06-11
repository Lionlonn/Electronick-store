import React, { useEffect, useState } from "react";
import { Alert, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { ScrollView, StyleSheet, View } from "react-native";
import { Cart } from "src/entities/product/ui/cart-view";
import { ActionButtonsProduct } from "src/features/action-button";
import { CounterTotalPrice } from "src/features/total-price";
import { useStateSelector } from "src/shared/hooks";
import { useStateUserAuth } from "features/auth/firebase/state-user";
import { StripeProvider } from "@stripe/stripe-react-native";
import PaymentScreen from "src/features/payment-screen/ui";




export const CheckOutPage = ({navigation}: any) => {
    const width = useWindowDimensions().width
    const cart = useStateSelector(state => state.cartSlice);
    const { initializing, user } = useStateUserAuth();

  
    const fontSize = width > 420 ? 22 : 16

    if (initializing) return <Text>Loading...</Text>;

    const publishKey = process.env.REACT_APP_PUBLISH_KEY
    if (!publishKey) return    
   
    return (
        <View style={styles.container}>
                
            <View style={styles.contentContainer}>
                <StripeProvider publishableKey={publishKey} >
                    <PaymentScreen/>
                </StripeProvider>
            </View>

            <View style={styles.footer}>
                <CounterTotalPrice/>
                <ActionButtonsProduct 
                    title="Proceed to Checkout" 
                    typeButton="continue to pay"
                    action={() => ""}
                />
            </View>
            
        </View>
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
        gap: 20
          
    },
    footer: {
        width: '100%',
        paddingVertical: 20,
        alignSelf: 'center',
        gap: 20
    }
    
})