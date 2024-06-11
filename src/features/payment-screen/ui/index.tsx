import { CardField, PaymentMethod, createPaymentMethod, useConfirmPayment, useStripe } from '@stripe/stripe-react-native';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native';
import { Screen } from 'react-native-screens';

// http://10.0.2.2:3002
export default function PaymentScreen() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);


  const API_URL = "http://10.0.2.2:3002" 
  const [ amount, setAmount ] = useState("");

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${API_URL}/payment-sheet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({cost: amount.replace(".", "")})
    });
    const { paymentIntent, ephemeralKey, customer} = await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

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
    <Screen style={{padding: 20}}>
      <TextInput onChangeText={(v) => {
        setAmount(v);
      }} style={{borderWidth: 1, borderColor: 'black'}}/>
      <Button
        title="Checkout"
        onPress={initializePaymentSheet}
      />
      {
        (loading)&&
        <ActivityIndicator/>
      }
    </Screen>
  );
}



const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 50,
    marginVertical: 30
  },
  cardStyle: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
  }
})