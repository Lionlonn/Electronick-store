import React, { useEffect } from "react";
import { useStateSelector } from "shared/hooks";
import { Product } from "entities/product";
import { Categories } from "src/entities/categories/ui";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { productsAll } from "src/entities/product/model";

interface PropsProductList {
    shapeView: 'box' | 'rect';
}

export const ProductsList = (props: PropsProductList) => {
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
            {props.shapeView === 'box' ? 
                <FlatList 
                    data={item}
                    keyExtractor={(item) => item.id.toString()}
                    style={{alignSelf: 'center',}}
                    
                    renderItem={({item}) => (
                        <TouchableOpacity style={styles.item}>
                            <Product key={item.id} item={item} shapeView={props.shapeView}/>
                        </TouchableOpacity>
                    )}
                    numColumns={numsColumns}
                    contentContainerStyle={{gap}}
                    columnWrapperStyle={{gap}}
                    scrollEnabled={false}
            /> 
                :<FlatList 
                    data={item}
                    keyExtractor={(item) => item.id.toString()}
                    style={{alignSelf: 'center',}}
                    
                    renderItem={({item}) => (
                        <TouchableOpacity style={styles.item}>
                            <Product key={item.id} item={item} shapeView={props.shapeView}/>
                        </TouchableOpacity>
                    )}
                    scrollEnabled={false}
                    contentContainerStyle={{gap: 12}}
                /> 
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    item: {
    }
})