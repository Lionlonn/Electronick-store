import React from "react";
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAppDispatch, useStateSelector } from "src/shared/hooks";
import { removeFromCart, updateQuantity } from "../../model/action-creators";
import { Button } from "react-native-paper";
import { ActionButtonsCart } from "src/features/action-button";


interface Props {
    name: string;
    image: string;
    price: number;
    id: number;
    quantity: number;
}

export const Cart = (props: Props) => {
    const cart = useStateSelector(state => state.cartSlice)
    const { name, image, price, id, quantity } = props
    const dispatch = useAppDispatch()

    const handleRemoveFromCart = (id: number) => {
        dispatch(removeFromCart(id))
    };

    const handleQuantityChange = (id: number, quantity: number) => {
        dispatch(updateQuantity({id, quantity}))
    }
    
    return (
            <View style={styles.wrapper} key={id}>
                <Image 
                    style={styles.image}
                    source={{
                        uri: image
                    }}
                />
                <View>
                    <Text>{name}</Text>
                    <Text>USD {price}</Text>

                    <View style={{flexDirection: 'row', gap: 20}}>
                        <ActionButtonsCart 
                            typeButton="decrement" 
                            action={() => handleQuantityChange(id, quantity -1)}
                            quantity={quantity}
                            />

                        <Text>{quantity}</Text>

                        <ActionButtonsCart 
                            typeButton="increment" 
                            action={() => handleQuantityChange(id, quantity + 1)}
                            quantity={quantity}
                            />

                        <ActionButtonsCart 
                            typeButton="remove" 
                            action={() => handleRemoveFromCart(id)}
                            />
                        
                    </View>
                </View>
                
                
            </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'rgb(244, 245, 247)',
        width: 366,
        height: 108,
        padding: 7,
        flexDirection: 'row',
        gap: 15
    },
    image: {
        width: 100,
        height: 90,
        borderRadius: 8
    },
    
})