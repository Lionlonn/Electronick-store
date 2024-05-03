import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export const PhoneNumberInput = () => {
  const [countryCode, setCountryCode] = useState('+7');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.countryCodeContainer}>
        <Text style={styles.countryCodeText}>{countryCode}</Text>
      </View>
      <View style={styles.phoneNumberContainer}>
        <TextInput
          style={styles.phoneNumberInput}
          placeholder="Enter phone number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryCodeContainer: {
    marginRight: 10,
    backgroundColor: 'rgb(246, 246, 245)',
    width: '15%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  countryCodeText: {
    fontSize: 16,
  },
  phoneNumberContainer: {
    flex: 1,
    backgroundColor: 'rgb(246, 246, 245)',
    borderRadius: 8,
    height: 50
  },
  phoneNumberInput: {
    fontSize: 16,
    paddingVertical: 8,
    paddingLeft: 8
  },
});

export default PhoneNumberInput;
