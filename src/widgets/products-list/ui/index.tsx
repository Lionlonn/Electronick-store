import React, { useEffect } from "react";
import { useStateSelector } from "shared/hooks";
import { Product, ProductItem } from "entities/product";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { productsAll } from "src/entities/product/model";
import { Favorite } from "src/features/favorite";

interface PropsProductList {
    shapeView: 'box' | 'rect' | 'boxHorizontal';
    item: ProductItem[] | undefined;
    navigation: any
}

export const ProductsList = (props: PropsProductList) => {
    const favoriteItems = useStateSelector(state => state.favorite.items)

    useEffect(() => {
        productsAll();
    }, [])

    // if (status !== 1) {
    //     return <Text>...Loading</Text>
    // }
    
    
    const gap = 23
    
    
    
    
    return (
        <View>
            
            {props.shapeView === 'box' ? (
                <FlatList 
                    data={props.item}
                    keyExtractor={(item) => item.id.toString()}
                    style={{alignSelf: 'center',}} 
                    renderItem={({item}) => (
                        <TouchableOpacity>
                            <Product 
                                key={item.id} 
                                item={item} 
                                shapeView={props.shapeView}
                                navigation={props.navigation}
                                favorite={
                                    <Favorite 
                                        product={item} 
                                        isFavorite={favoriteItems.some(product => product.id === item.id)}
                                    />
                                }
                                />
                        </TouchableOpacity>
                    )}
                    numColumns={2}
                    contentContainerStyle={{gap}}
                    columnWrapperStyle={{gap}}
                    scrollEnabled={false}
                
            /> 
            ) 
                : props.shapeView === 'rect' ? (
                    <FlatList 
                        data={props.item}
                        keyExtractor={(item) => item.id.toString()}
                        style={{alignSelf: 'center',}}
                        renderItem={({item}) => (
                            <TouchableOpacity>
                                <Product 
                                    key={item.id} 
                                    item={item} 
                                    shapeView={props.shapeView}
                                    navigation={props.navigation}
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
                ) : (
                    <FlatList 
                        data={props.item}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{gap: 17}}
                        renderItem={({item}) => (
                        <TouchableOpacity>
                                <Product 
                                    key={item.id} 
                                    item={item}
                                    shapeView={props.shapeView}
                                    navigation={props.navigation}
                                    favorite={
                                        <Favorite 
                                            product={item} 
                                            isFavorite={favoriteItems.some(product => product.id === item.id)}
                                        />
                                    }
                                    />
                            </TouchableOpacity> 
                        )}
                    />
        
                )
            }
            
        </View>
    )
}

