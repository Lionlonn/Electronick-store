import React from "react";
import { Text, View } from "react-native";
import { useStateSelector } from "src/shared/hooks";


export const CartOrder = () => {
    const itemTest = useStateSelector(state => state.orderSlice)

    

    return <View>
        {itemTest.map(item => item.items.map(test => (
            <Text>{test.name}</Text>
        )))}
        
    </View>
}