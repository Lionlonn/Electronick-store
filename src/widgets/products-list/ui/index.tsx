import React, { useEffect } from "react";
import { useStateSelector } from "shared/hooks";
import { Product } from "entities/product";
import { Categories } from "src/entities/categories/ui";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { productsAll } from "src/entities/product/model";


export const ProductsList = () => {
    const { item, status } = useStateSelector(state => state.products)

    useEffect(() => {
        productsAll();
    }, [])

    if (status !== 1) {
        return <Text>...Loading</Text>
    }

    
    
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
        </>
    )
}