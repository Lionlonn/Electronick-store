import React from "react";
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAppDispatch, useStateSelector } from "src/shared/hooks";
import { removeFromCart, updateQuantity } from "../../model/action-creators";
import { Button } from "react-native-paper";


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
                </View>
                
                <View style={{flexDirection: 'row', gap: 20}}>
                    <TouchableOpacity 
                        style={styles.buttonsHandleQuantity}
                        onPress={() => handleQuantityChange(id, quantity - 1)}
                        disabled={quantity <= 1}
                    >
                        <Text>-</Text>
                    </TouchableOpacity>
                    
                        

                    
                    <Text>{quantity}</Text>
                    <TouchableOpacity 
                        style={styles.buttonsHandleQuantity}
                        onPress={() => handleQuantityChange(id, quantity + 1)}
                        disabled={quantity >= 10}
                        
                        >
                        <Text>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleRemoveFromCart(id)}
                    >
                        <Text>Remove</Text>
                    </TouchableOpacity>
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
    buttonsHandleQuantity: {
        width: 20,
        height: 20,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgb(166, 167, 152)'
    }
})