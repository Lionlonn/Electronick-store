import React from "react";
import { Button } from "react-native";
import { Alert, FlatList, Text, View } from "react-native";
import { useStateSelector } from "src/shared/hooks";
import { CartOrder } from "src/shared/ui/card";



export const OrdersList = ({navigation}: any) => {
    const [ items, date ] = useStateSelector(state => state.orderSlice)
    
    
     
   
   

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
                            item={item}
                            date="2"
                            name={item.name}
                            navigation={navigation}
                        />
                    </View>
                )}
            />
        </View>
    )
}
