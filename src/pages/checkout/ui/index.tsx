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
import { DeliveryMap } from "src/features/delivery-map";
import { AdressField } from "src/shared/ui/adress-field";
import { PhoneNumberInput } from "src/shared/ui/number-field";




export const CheckOutPage = ({navigation}: any) => {
    const width = useWindowDimensions().width
    const cart = useStateSelector(state => state.cartSlice);
    const { initializing, user } = useStateUserAuth();
    const [address, setAddress] = useState<string>('');
  
    const fontSize = width > 420 ? 22 : 14

    if (initializing) return <Text>Loading...</Text>;

    const publishKey = process.env.REACT_APP_PUBLISH_KEY
    if (!publishKey) return null   
    
    
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={[styles.text, {fontSize: fontSize}]}>SHIPPING INFORMATION</Text>
                <View style={{minHeight: 250,}}><DeliveryMap address={address}/></View>
                
                <View style={styles.infoDeliveryField}>
                    <View style={{gap: 5}}>
                        <Text style={[styles.text, {fontSize: fontSize}]}>Adress</Text>
                        <AdressField adress={address} setAdress={setAddress}/>
                    </View>
                    <View style={{gap: 5}}>
                        <Text style={[styles.text, {fontSize: fontSize}]}>Phone number</Text>
                        <PhoneNumberInput colorText="black"/>
                    </View>
                    
                </View>
                
            </View>

            <View style={styles.footer}>
                <CounterTotalPrice/>
                <View>
                    <StripeProvider publishableKey={publishKey} >
                        <PaymentScreen/>
                    </StripeProvider>
                </View>
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
        gap: 20,
        flex: 1,
    },

    infoDeliveryField: {
        gap: 20,
    },

    text: {
        fontFamily: 'Avenir-Heavy',
        color: 'rgb(166, 167, 152)'
    },
    
    footer: {
        width: '100%',
        paddingVertical: 20,
        alignSelf: 'center',
        gap: 20
    }
    
})