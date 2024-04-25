import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, useWindowDimensions } from "react-native";



interface Props {
    title: string;
    typeButton: 'log in' | 'login' | 'sign up';
    action: () => void;
    backgroundColor: boolean;
    navigation: any;
    path: 'LoginPage' | 'RegistrationPage'
}



export const AuthButton = (props: Props) => {
    const { title, typeButton, action, backgroundColor, navigation, path } = props
    const width = useWindowDimensions().width;
    const fontSize = width > 420 ? 22 : 16

    

        return(
            <TouchableOpacity 
                activeOpacity={0.7} 
                style={[
                    styles.wrapper,
                    {
                        backgroundColor: backgroundColor ? 'rgb(206, 213, 91)' :  '',
                    }
                ]}
                onPress={() => navigation.navigate(props.path)}
                >
                <Text style={[
                    styles.title, 
                    {
                        fontSize: fontSize,
                        color: props.backgroundColor ? 'rgb(4, 11, 20)' : '#FFF'
                    }
                    ]}>{title}</Text>
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