import { CardField, useStripe } from '@stripe/stripe-react-native';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';


export default function PaymentScreen() {
  const { confirmPayment} = useStripe();
  const [clientSecret, setClientSecret] = useState('');
  const [testMessage, setTestMessage] = useState('');

  const fetchPaymentIntent = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3002/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.error('Error fetching payment intent:', error);
    }
  };



  
  
  return (
    <View>
      <Text>Client Secret: {clientSecret}</Text>
      <CardField
        postalCodeEnabled={false}
        placeholders={{
          number: 'Your number card',
        }}
        cardStyle={styles.cardStyle}
        style={styles.wrapper}
        onCardChange={(cardDetails) => {
          console.log(cardDetails, "CARD_DETAILS")
        }}	
      />
      <Button title='Pay' onPress={fetchPaymentIntent}/>
    </View>
    
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