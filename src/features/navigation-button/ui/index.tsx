import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, useWindowDimensions } from "react-native";



interface Props {
    title: string;
    navigation: any;
    path: string;
}



export const NavigationButton = (props: Props) => {

    const width = useWindowDimensions().width;
    const fontSize = width > 420 ? 24 : 16

    

        return(
            <TouchableOpacity 
                activeOpacity={0.7} 
                style={[
                    styles.wrapper,
                ]}
                onPress={() => props.navigation.navigate(props.path)}
                >
                <Text style={[
                    styles.title, 
                    { fontSize: fontSize}
                    ]}>{props.title}</Text>
            </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: 'rgb(206, 213, 91)'
    },
    title: {
        fontFamily: 'Avenir-Heavy',
        fontWeight: '500',
        color: 'black'

    }
})
