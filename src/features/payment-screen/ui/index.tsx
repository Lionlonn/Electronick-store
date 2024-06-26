import { CardField, PaymentMethod, createPaymentMethod, useConfirmPayment, useStripe } from '@stripe/stripe-react-native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native';
import { Screen } from 'react-native-screens';
import { placeOrder } from 'src/entities/product/model/action-creators';
import { ActionButtonsProduct } from 'src/features/action-button';
import { TotalPriceProps } from 'src/features/total-price/ui';
import { useAppDispatch, useStateSelector } from 'src/shared/hooks';
import { LoadingIndicator } from 'src/shared/ui/preloader';

interface PaymentScreenProps {
  totalCost: string;
  navigation: any;
  disableButton: boolean;
}

export const PaymentScreen:React.FC<PaymentScreenProps> = ({totalCost, navigation, disableButton}) => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  const itemsOrder = useStateSelector(state => state.cartSlice)
  const dispatch = useAppDispatch()
  
  
  const cart = useStateSelector(state => state.cartSlice);
  const totalPrice = (cart.reduce((acc, item) => acc + item.price * item.quantity, 0)).toFixed(2);
  const price = totalCost ? (parseFloat(totalPrice) + parseFloat(totalCost)).toFixed(2) : totalPrice;

  const API_URL = "http://10.0.2.2:3002"

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${API_URL}/payment-sheet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({cost: price.replace(".", "")})
    });
    const { paymentIntent, ephemeralKey, customer} = await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };
  console.log(totalPrice)
  const initializePaymentSheet = async () => {
    setLoading(true)
    const {
      paymentIntent,
      ephemeralKey,
      customer,
    } = await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: 'Jane Doe',
      }
    });
    if (!error) {
      setLoading(true);
      setLoading(false);
      openPaymentSheet();
    }
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();
    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      navigation.navigate('PaidPage')
      dispatch(placeOrder({items: itemsOrder, date:'2'}))
    }
  };

  return (
    <Screen>
      <ActionButtonsProduct 
        title={"checkout $" + price}
        typeButton='to pay'
        action={initializePaymentSheet}
        disabled={disableButton}
      />
      {
        (loading)&&
        <LoadingIndicator/>
      }
    </Screen>
  );
}



const styles = StyleSheet.create({
   
})