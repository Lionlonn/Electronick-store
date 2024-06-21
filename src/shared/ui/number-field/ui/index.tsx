import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

interface PropsProneNumber {
  colorText?: string;
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
}

export const PhoneNumberInput:React.FC<PropsProneNumber> = ({colorText, phoneNumber, setPhoneNumber}) => {
  const [countryCode, setCountryCode] = useState('+7');

  return (
    <View style={styles.container}>
      <View style={styles.countryCodeContainer}>
        <Text style={[styles.countryCodeText, {color: colorText}]}>{countryCode}</Text>
      </View>
      <View style={styles.phoneNumberContainer}>
        <TextInput
          style={[styles.phoneNumberInput, {color: colorText}]}
          placeholder="Enter phone number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholderTextColor={'rgb(138, 139, 122)'}
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
    fontFamily: 'Avenir-Heavy',
    fontWeight: '400',
    color: 'rgb(138, 139, 122)'
  },
  phoneNumberContainer: {
    flex: 1,
    backgroundColor: 'rgb(246, 246, 245)',
    borderRadius: 8,
    height: 50
  },
  phoneNumberInput: {
    fontSize: 16,
    paddingLeft: 8,
    verticalAlign: 'middle',
    fontFamily: 'Avenir-Heavy',
    fontWeight: '400',
    color: 'rgb(138, 139, 122)'
  },
});

export default PhoneNumberInput;
