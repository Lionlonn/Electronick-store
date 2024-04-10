import React, { useEffect } from "react";
import { FlatList, TouchableOpacity, View, Text } from "react-native";
import { Product } from "src/entities/product";
import { getButtonProductsAll } from "src/features/category-buttons/model";
import { Favorite } from "src/features/favorite";
import { useStateSelector } from "src/shared/hooks";


export const SearchUsers = () => {
    const { item, status } = useStateSelector(state => state.buttonPrudcts)
    const favoriteItems = useStateSelector(state => state.favorite.items) 

    useEffect(() => {
        getButtonProductsAll()
    }, [])

    return (
        
        
        <FlatList 
            data={item}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            renderItem={({item}) => (
               <TouchableOpacity>
                    <Product 
                        key={item.id} 
                        item={item} 
                        shapeView={'box'}
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