import React from "react";
import { Alert, FlatList, View } from "react-native";
import { useStateSelector } from "src/shared/hooks";
import { CartOrder } from "src/shared/ui/card";



export const OrdersList = () => {
    const [ items, date ] = useStateSelector(state => state.orderSlice)
    
    console.log(items.items, "ITEM")

    return (
        <View>
            <FlatList 
                data={items.items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View style={{marginBottom: 24}}>
                        <CartOrder 
                            id={item.id}
                            image={item.img[0]}
                            date="2"
                            name={item.name}
                        />
                    </View>
                )}
            />
        </View>
    )
}