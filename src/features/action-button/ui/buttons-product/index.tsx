import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, useWindowDimensions } from "react-native";



interface ActionButtonProps {
    title: string;
    typeButton?: 'add card' | 'continue to pay' | 'to pay';
    action: () => void;
    disabled?: boolean;
}



export const ActionButtonsProduct:React.FC<ActionButtonProps> = ({title, typeButton, action, disabled}) => {

    const width = useWindowDimensions().width;
    const fontSize = width > 420 ? 22 : 16

    

        return(
            <TouchableOpacity 
                activeOpacity={0.7} 
                style={[styles.wrapper, {backgroundColor: disabled ? 'rgb(186, 193, 81)' : 'rgb(206, 213, 91)' }]}
                onPress={action}
                disabled={disabled}
                >
                <Text style={[styles.title, {fontSize: fontSize}]}>{title}</Text>
            </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        minHeight: 50,
        
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