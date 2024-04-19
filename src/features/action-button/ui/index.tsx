import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, useWindowDimensions } from "react-native";


interface Props {
    title: string;
    typeButton: 'add card' | 'continue to pay' | 'to pay';
    action: () => void;
}



export const ActionButtons = (props: Props) => {
    const width = useWindowDimensions().width;
    const fontSize = width > 420 ? 22 : 16

    const handleAction = (type: string) => {
        
    }

    return(
        <TouchableOpacity 
            activeOpacity={0.7} 
            style={styles.wrapper}
            onPress={props.action}
            >
            <Text style={[styles.title, {fontSize: fontSize}]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        height: 60,
        backgroundColor: 'rgb(206, 213, 91)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    title: {
        fontFamily: 'Avenir-Black',
        fontWeight: '500',
        lineHeight: 22
    }
})