import React, { useRef, useState } from "react";
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import { FilterButtonContainer, FilterData } from "src/features/filter-button";


const { width, height } = Dimensions.get('window')
export const SearchInputField = () => {
    const [text, onChangeText] = React.useState('');

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}  
                    placeholder="Search product name"
                    placeholderTextColor="#888C93"
                    underlineColorAndroid='transparent'
                    autoCorrect={false}
                />
                <View style={styles.inputInnerContainer}>
                    <FilterButtonContainer/>
                </View>
             </View>
            

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width
    },
    wrapper: {
        position: 'relative',
        
    },
    input: {
        width: 360,
        height: 50,
        borderWidth: 0.6,
        borderRadius: 6,
        borderColor: "#C9CEDA",
        paddingLeft: 24,
        margin: 24,
        color: 'black',
        fontWeight: '400',
        fontSize: 16,
        fontFamily: 'Avenir-Roman',
        
    },
    inputInnerContainer: {
        position: 'absolute',
        top: 24,
        right: 25
    },
   
})