import React, { useEffect, useState } from "react";
import { Alert, Button, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { ScrollView, StyleSheet, View } from "react-native";
import { Cart } from "src/entities/product/ui/cart-view";
import { ActionButtonsProduct } from "src/features/action-button";
import { CounterTotalPrice } from "src/features/total-price";
import { useStateSelector } from "src/shared/hooks";
import { useStateUserAuth } from "features/auth/firebase/state-user";
import { StripeProvider } from "@stripe/stripe-react-native";
import { PaymentScreen } from "src/features/payment-screen/ui";
import { DeliveryMap } from "src/features/delivery-map";
import { AdressField } from "src/shared/ui/adress-field";
import { PhoneNumberInput } from "src/shared/ui/number-field";




export const CheckOutPage = ({navigation}: any) => {
    const width = useWindowDimensions().width
    const cart = useStateSelector(state => state.cartSlice);
    const totalPrice = (cart.reduce((acc, item) => acc + item.price * item.quantity, 0)).toFixed(2);
    const { initializing, user } = useStateUserAuth();
    const [address, setAddress] = useState<string>('');
    const [ disableButton, setDisabledButton ] = useState<boolean>(true);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading, setLoading ] = useState<boolean>(false);

    const fontSize = width > 420 ? 22 : 14

    useEffect(() => {
        if (address.length > 10 && phoneNumber.length == 10) {
            setDisabledButton(false)
        } else {
            setDisabledButton(true)
        }
    }, [address, phoneNumber])

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
                        <PhoneNumberInput colorText="black" phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}/>
                    </View>
                    
                </View>
                
            </View>

            <View style={styles.tape}></View>

            <View style={styles.infoPriceCost}>
                <View style={styles.subInfoPriceCost}>
                    <Text style={[styles.textInfoPriceCost, {fontSize: fontSize}]}>SubTotal</Text>
                    <Text style={[styles.textInfoPriceCost, {fontSize: fontSize * 1.1}]}>${totalPrice}</Text>
                </View>
                <View style={styles.subInfoPriceCost}>
                    <Text style={[styles.textInfoPriceCost, {fontSize: fontSize}]}>Shoping cost</Text>
                    <Text style={[styles.textInfoPriceCost, {fontSize: fontSize * 1.1}]}>$50.0</Text>
                </View>
            </View>
            
            <View style={styles.footer}>
                <CounterTotalPrice totalCost='50.0'/>
                
                <View >
                    <StripeProvider publishableKey={publishKey} >
                        <PaymentScreen totalCost="50.0" navigation={navigation} disableButton={disableButton}/>
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
    tape: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'rgb(244, 245, 247)',
        marginVertical: 23
    },
    infoPriceCost: {
        gap: 13
    },
    subInfoPriceCost: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
        
    },
    textInfoPriceCost: {
        color: "rgb(166, 167, 152)",
        fontFamily: 'Avenir-Heavy'
    },
    footer: {
        width: '100%',
        paddingVertical: 20,
        alignSelf: 'center',
        gap: 20,
    }
    
})