import React, { useEffect } from "react";
import { useStateSelector } from "shared/hooks";
import { Product, ProductItem } from "entities/product";
import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { productsAll } from "src/entities/product/model";
import { Favorite } from "src/features/favorite";

interface ProductListProps {
    shapeView: 'box' | 'rect' | 'boxHorizontal';
    item: ProductItem[] | undefined;
    navigation: any;
    
}

export const ProductsList:React.FC<ProductListProps> = ({shapeView, item, navigation}) => {
    const favoriteItems = useStateSelector(state => state.favorite.items)

    useEffect(() => {
        productsAll();
    }, [])

    // if (status !== 1) {
    //     return <Text>...Loading</Text>
    // }
    
    
    const gap = 23
    
    
    
    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            
            {shapeView === 'box' ? (
                <FlatList 
                    data={item}
                    keyExtractor={(item) => item.id.toString()}
                    style={{alignSelf: 'center',}} 
                    renderItem={({item}) => (
                        <TouchableOpacity>
                            <Product 
                                key={item.id} 
                                item={item} 
                                shapeView={shapeView}
                                navigation={navigation}
                                favorite={
                                    <Favorite
                                        type='mainIcon' 
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
                : shapeView === 'rect' ? (
                    <FlatList 
                        data={item}
                        keyExtractor={(item) => item.id.toString()}
                        style={{alignSelf: 'center',}}
                        renderItem={({item}) => (
                            <TouchableOpacity>
                                <Product 
                                    key={item.id} 
                                    item={item} 
                                    shapeView={shapeView}
                                    navigation={navigation}
                                    favorite={
                                        <Favorite
                                            type='mainIcon'
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
                        data={item}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{gap: 17}}
                        renderItem={({item}) => (
                        <TouchableOpacity>
                                <Product 
                                    key={item.id} 
                                    item={item}
                                    shapeView={shapeView}
                                    navigation={navigation}
                                    favorite={
                                        <Favorite 
                                            type='mainIcon'
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
            
        </ScrollView>
    )
}

