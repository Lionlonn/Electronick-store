import React from "react";
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAppDispatch, useStateSelector } from "src/shared/hooks";
import { removeFromCart, updateQuantity } from "../../model/action-creators";
import { Button } from "react-native-paper";
import { ActionButtonsCart } from "src/features/action-button";
import { useWindowDimensions } from "react-native";


interface Props {
    name: string;
    image: string;
    price: number;
    id: number;
    quantity: number;
}

export const Cart = (props: Props) => {
    const { name, image, price, id, quantity } = props
    const dispatch = useAppDispatch()
    const width = useWindowDimensions().width;
    const fontSizeDefault = 14

    const handleRemoveFromCart = (id: number) => {
        dispatch(removeFromCart(id))
    };

    const handleQuantityChange = (id: number, quantity: number) => {
        dispatch(updateQuantity({id, quantity}))
    }
    
    return (
            <View style={[styles.wrapper, {height: width > 420 ? 160 : 120}]} key={id}>
                <Image 
                    style={styles.image}
                    source={{
                        uri: image
                    }}
                />
                
                <View style={styles.rightBlock}>
                    <View style={styles.info}>
                        <Text 
                            style={[
                                styles.nameText,
                                {
                                    fontSize: width > 420 ? fontSizeDefault * 1.5 : fontSizeDefault * 1.2,
                                    lineHeight: width > 420 ? fontSizeDefault * 1.6 : fontSizeDefault * 1.3
                                }
                            ]}
                        >{name}</Text>
                        <Text
                            style={[
                                styles.priceText,
                                {
                                    fontSize: width > 420 ? fontSizeDefault * 1.2 : fontSizeDefault * 0.9,
                                    lineHeight: width > 420 ? fontSizeDefault * 1.2 : fontSizeDefault 
                                }
                            ]}
                        >USD {price}</Text>
                    </View>
                    

                    <View style={styles.actionBlock}>
                        <View style={styles.actionBlockChange}>
                            <ActionButtonsCart 
                                typeButton="decrement" 
                                action={() => handleQuantityChange(id, quantity -1)}
                                quantity={quantity}
                            />

                            <Text style={[
                                    styles.quantityText,
                                    {
                                        fontSize: width > 420 ? fontSizeDefault * 1.5 : fontSizeDefault,
                                        lineHeight: width> 420 ? fontSizeDefault * 1.6 : fontSizeDefault * 1.2
                                    }
                                ]}>{quantity}</Text>

                            <ActionButtonsCart 
                                typeButton="increment" 
                                action={() => handleQuantityChange(id, quantity + 1)}
                                quantity={quantity}
                            />
                        </View>
                        

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
        width: '100%',
        padding: 7,
        flexDirection: 'row',
        gap: 15,
        borderRadius: 8
    },
    image: {
        flex: 0.4,
        borderRadius: 8
    },
    rightBlock: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 4,
        paddingRight: 10,
        
    },
    info: {
        marginBottom: 15
    },
    nameText: {
        fontFamily: 'Avenir-Heavy',
        color: 'black',
        fontWeight: '500',
        marginBottom: 4
    },
    priceText: {
        color: 'rgb(186, 92, 61)',
        fontFamily: 'Avenir-Heavy',
        fontWeight: '800'
    },
    actionBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    actionBlockChange: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center'
    },
    quantityText: {
        color: 'rgb(166, 167, 152)',
        fontFamily: 'Avenir-Heavy',
        fontWeight: '500',
        top: 2
    }
})