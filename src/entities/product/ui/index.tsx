import React, { useEffect, useId } from "react";
import { ProductCard } from "./card";
import { useActionCreators, useAppDispatch, useStateSelector } from "../../../shared/hooks/hooks";
import { addToFavorite } from "../../../features/favorite/model";
import { ProductItem } from "../api";
import { store } from "../../../app/store";


interface Props {
    item: ProductItem,
}


export const Product = (props:Props) => {
    const dispatch = useAppDispatch()

    const handleAddToFavorite = (product:ProductItem) => {
        dispatch(addToFavorite(product))
        
        console.log(product, 'productss');
        console.log(store.getState());
        
    }

    
    
    
    
    
    return (
        <>
            <ProductCard  
                item={props.item} handleAddToFavorite={handleAddToFavorite}
            />
            
        </>
    )
}