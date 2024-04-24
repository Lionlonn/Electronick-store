import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, useWindowDimensions } from "react-native";



interface Props {
    title: string;
    typeButton: 'log in' | 'login' | 'sign up';
    action: () => void;
    backgroundColor: boolean
}



export const AuthButton = (props: Props) => {

    const width = useWindowDimensions().width;
    const fontSize = width > 420 ? 22 : 16

    

        return(
            <TouchableOpacity 
                activeOpacity={0.7} 
                style={[
                    styles.wrapper,
                    {
                        backgroundColor: props.backgroundColor ? 'rgb(206, 213, 91)' :  '',
                    }
                ]}
                onPress={props.action}
                >
                <Text style={[
                    styles.title, 
                    {
                        fontSize: fontSize,
                        color: props.backgroundColor ? 'rgb(4, 11, 20)' : '#FFF'
                    }
                    ]}>{props.title}</Text>
            </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    title: {
        fontFamily: 'Avenir-Heavy',
        fontWeight: '500',
        lineHeight: 22,

    }
})