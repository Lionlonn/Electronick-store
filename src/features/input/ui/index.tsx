import React from "react";
import {StyleSheet, TextInput} from 'react-native';

export const InputText = () => {
    const [text, onChangeText] = React.useState('');


    return (
        <>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}  
                placeholder="Search product name"
                placeholderTextColor="#888C93"
                underlineColorAndroid='transparent'
                autoCorrect={false}
            />
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        width: 360,
        height: 50,
        borderWidth: 0.6,
        borderRadius: 6,
        borderColor: "#C9CEDA",
        paddingLeft: 24,
        margin: 12,
        color: 'black',
        fontWeight: '400',
        fontSize: 16,
        fontFamily: 'Avenir-Roman'
    },
    
})