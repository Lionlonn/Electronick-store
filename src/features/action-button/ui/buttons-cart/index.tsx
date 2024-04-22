import React from "react";
import { StyleSheet, Text, TouchableOpacity, useWindowDimensions } from "react-native";



interface Props {
    typeButton: 'increment' | 'decrement' | 'remove';
    action: () => void;
    quantity?: number;
}



export const ActionButtonsCart = (props: Props) => {

    const width = useWindowDimensions().width;
    const fontSize = width > 420 ? 22 : 16

    

        return(
            <>
                {props.typeButton === 'decrement' && props.quantity ? (
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={props.action}
                        disabled={props.quantity <= 1}
                    >
                        <Text>-</Text>
                    </TouchableOpacity>
                ) : props.typeButton === 'increment' && props.quantity ? (
                   <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={props.action}
                        disabled={props.quantity >= 10}
                   >
                        <Text>+</Text>
                    </TouchableOpacity> 
                ) : (
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={props.action}
                    >
                        <Text>Remove</Text>
                    </TouchableOpacity>
                )}
            </>
            
        )
}

const styles = StyleSheet.create({
    
})