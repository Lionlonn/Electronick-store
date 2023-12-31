import React from "react";
import { ProductCard } from "./card";
import { useAppDispatch, useStateSelector } from "shared/hooks";

import { addToFavorite, removeFromFavorite } from "features/favorite";
import { ProductItem } from "../api";
import { store } from "app/store";
import { FlatList } from "react-native";


interface Props {
    item: ProductItem,
}


export const Product = (props:Props) => {
    const dispatch = useAppDispatch()
    const favoriteItems = useStateSelector(state => state.favorite.items)
    const isFavorite = favoriteItems.some(product => product.id === props.item.id)

    const handleToggleFavorite = (product: ProductItem) => {
        if (isFavorite) {
            dispatch(removeFromFavorite(product))
            console.log(store.getState().favorite);
        } else {
            dispatch(addToFavorite(product))
            console.log(store.getState().favorite);
        }
    }
    
    return (
        <>
            
            <ProductCard  
                item={props.item}
                handleToggleFavorite={handleToggleFavorite}
                isFavorite={isFavorite}
            />
            
        </>
    )
}