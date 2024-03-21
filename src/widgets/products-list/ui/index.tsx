import React, { useEffect } from "react";
import { useStateSelector } from "shared/hooks";
import { Product } from "entities/product";
import { Categories } from "src/entities/categories/ui";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
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

    const numsColumns = 2
    const gap = 23
    
    return (
        <View style={styles.container}>
            <FlatList 
                data={item}
                keyExtractor={(item) => item.id.toString()}
                style={{alignSelf: 'center',}}
                
                renderItem={({item}) => (
                    <TouchableOpacity style={styles.item}>
                        <Product key={item.id} item={item}/>
                    </TouchableOpacity>
                )}
                numColumns={numsColumns}
                contentContainerStyle={{gap}}
                columnWrapperStyle={{gap}}
                scrollEnabled={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    item: {
        
    }
})