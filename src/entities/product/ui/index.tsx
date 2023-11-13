import React, { useEffect, useId } from "react";
import { ProductCard } from "./card";
import { useActionCreators, useAppDispatch, useStateSelector } from "../../../shared/hooks/hooks";
import { addToFavorite, removeFromFavorite } from "../../../features/favorite/model";
import { ProductItem } from "../api";
import { store } from "../../../app/store";


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