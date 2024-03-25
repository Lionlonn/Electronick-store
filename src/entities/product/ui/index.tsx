import React from "react";
import { ProductCard } from "./card";
import { useAppDispatch, useStateSelector } from "shared/hooks";

import { Favorite, addToFavorite, removeFromFavorite } from "features/favorite";
import { ProductItem } from "../api";
import { CardProduct } from "src/shared/ui/card";


interface Props {
    item: ProductItem;
    shapeView: 'box' | 'rect'
}


export const Product = (props:Props) => {
    const dispatch = useAppDispatch()
    const favoriteItems = useStateSelector(state => state.favorite.items)
    const isFavorite = favoriteItems.some(product => product.id === props.item.id)
    
    

    const handleToggleFavorite = (product: ProductItem) => {
        isFavorite 
        ? dispatch(removeFromFavorite(product)) 
        : dispatch(addToFavorite(product))
    }
    
    return (
        <>
            <CardProduct 
                item={props.item}
                shape={props.shapeView}
                rightTopSlot={
                    <Favorite toggleFavorite={
                        () => handleToggleFavorite(props.item)
                    } isFavorite={isFavorite}/>
                }
                />
        </>
    )
}