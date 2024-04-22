import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions } from "react-native";




interface Props {
    typeButton: 'increment' | 'decrement' | 'remove';
    action: () => void;
    quantity?: number;
}



export const ActionButtonsCart = (props: Props) => {

    const width = useWindowDimensions().width;
    const fontSize = width > 420 ? 22 : 16

   
    const color = {
        disabled:'rgb(210, 210, 210)',
        default: 'rgb(166, 167, 152)' 
    }
     

    return(
        <>
            {props.typeButton === 'decrement' && props.quantity ? (
                <TouchableOpacity
                    style={[
                        styles.buttonsHandleQuantity,
                        {borderColor: props.quantity <= 1 ? color.disabled : color.default}
                    ]}
                    activeOpacity={0.7}
                    onPress={props.action}
                    disabled={props.quantity <= 1}
                >
                    <Image
                        style={{width: '50%', height: '50%'}}
                        source={props.quantity <= 1
                            ? require('../../image/minus-disabled.png')
                            : require('../../image/minus-default.png')
                        }
                    />
                </TouchableOpacity>
            ) : props.typeButton === 'increment' && props.quantity ? (
               <TouchableOpacity
                    style={[
                        styles.buttonsHandleQuantity,
                        {borderColor: props.quantity >= 10 ? color.disabled : color.default}
                    ]}
                    activeOpacity={0.7}
                    onPress={props.action}
                    disabled={props.quantity >= 10}
               >
                    <Image
                        style={{width: '50%', height: '50%'}}
                        source={props.quantity >= 10 
                            ? require('../../image/plus-disabled.png')
                            : require('../../image/plus-default.png')
                        }
                    />
                </TouchableOpacity> 
            ) : (
                <TouchableOpacity
                    style={styles.removeButton}
                    activeOpacity={0.7}
                    onPress={props.action}
                >
                    <Text style={[styles.text, {fontSize: width > 420 ? 20 : 14, lineHeight: width > 420 ? 20 : 14}]}>Remove</Text>
                </TouchableOpacity>
            )}
        </>
        
    )
}

const styles = StyleSheet.create({
    buttonsHandleQuantity: {
        width: 24,
        height: 24,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    removeButton: {
        backgroundColor: 'rgb(254, 254, 254)',
        borderRadius: 100,
        width: 'auto',
        height: 'auto',
        paddingHorizontal: 10,
        paddingVertical: 4
    },
    text: {
        color: 'black',
        fontWeight: '500',
        textAlign: 'center'
    }
})