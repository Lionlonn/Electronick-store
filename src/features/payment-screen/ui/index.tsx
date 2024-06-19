import { CardField, PaymentMethod, createPaymentMethod, useConfirmPayment, useStripe } from '@stripe/stripe-react-native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native';
import { Screen } from 'react-native-screens';
import { ActionButtonsProduct } from 'src/features/action-button';
import { TotalPriceProps } from 'src/features/total-price/ui';
import { useStateSelector } from 'src/shared/hooks';




export const PaymentScreen:React.FC<TotalPriceProps> = ({totalCost}) => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

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
      Alert.alert('Success', 'Your order is confirmed!');
    }
  };

  
  return (
    <Screen>
      <ActionButtonsProduct 
        title={"checkout $" + price}
        typeButton='to pay'
        action={initializePaymentSheet}
      />
      {
        (loading)&&
        <ActivityIndicator/>
      }
    </Screen>
  );
}



const styles = StyleSheet.create({
   
})