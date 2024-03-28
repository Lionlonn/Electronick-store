import React, { useEffect } from "react";
import { useStateSelector } from "shared/hooks";
import { Product } from "entities/product";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { productsAll } from "src/entities/product/model";
import { Favorite } from "src/features/favorite";

interface PropsProductList {
    shapeView: 'box' | 'rect';
}

export const ProductsList = (props: PropsProductList) => {
    const { item, status } = useStateSelector(state => state.products)
    const favoriteItems = useStateSelector(state => state.favorite.items)

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
                            <Product 
                                key={item.id} 
                                item={item} 
                                shapeView={props.shapeView} 
                                favorite={
                                    <Favorite 
                                        product={item} 
                                        isFavorite={favoriteItems.some(product => product.id === item.id)}
                                    />
                                }
                                />
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
                            <Product 
                                key={item.id} 
                                item={item} 
                                shapeView={props.shapeView}
                                favorite={
                                    <Favorite 
                                        product={item} 
                                        isFavorite={favoriteItems.some(product => product.id === item.id)}
                                        />
                                }
                                />
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