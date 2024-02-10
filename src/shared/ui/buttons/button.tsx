import React, { FC } from 'react';
import { Text, StyleSheet, Pressable, View } from 'react-native';



type Props = {
    buttonColor: "white" | "yellow",
    type?: "Button" | 'Cansel' | "Apply",
    onClick: () => void
}





export const Button: FC<Props> = ({buttonColor, type, onClick}) => {


    return (
        <Pressable onPress={onClick} style={({pressed}) => [
            styles.button,
            {backgroundColor: pressed ? 'grey' : buttonColor === 'white' ? "#f5f5f5": "#FFFF00"},
        ]}>
            <Text style={styles.title}>{type}</Text>
        </Pressable>
    )
}

Button.defaultProps = {
    buttonColor: "white",
    type: "Button"
}
const styles = StyleSheet.create({
    button: {
        width: 150,
        height: 42,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
    },
    title: {
        fontSize: 16,
        fontFamily: "Avenir-Black",
        color: 'black'
    },
    
});
