import React from "react";
import { useStateSelector } from "shared/hooks";
import { Product } from "entities/product";
import { Categories } from "src/entities/categories/ui";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Button, Text } from "react-native-paper";


export const ProductsList = () => {
    const { item, status } = useStateSelector(state => state.products)
    
    
    
    

    return (
        <>
           
            <FlatList 
                data={item}
                renderItem={({item}) => (
                    <TouchableOpacity>
                        <Product key={item.id} item={item}/>
                    </TouchableOpacity>
                )}
            />
                
            {/* {item?.map(item => (
                    <Product key={item.id} item={item}/>
                
            ))} */}
            
        </>
    )
}