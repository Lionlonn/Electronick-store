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
        color: '#888C93',
        fontWeight: '400',
        fontSize: 16,
    },
    
})