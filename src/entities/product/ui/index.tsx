import React from "react";
import { ProductCard } from "./card";
import { useAppDispatch, useStateSelector } from "shared/hooks";

import { Favorite, addToFavorite, removeFromFavorite } from "features/favorite";
import { ProductItem } from "../api";
import { CardProduct } from "src/shared/ui/card";
import { Polygon } from "react-native-svg";


interface Props {
    item: ProductItem;
    shapeView: 'box' | 'rect',
    favorite: React.ReactNode
}


export const Product = (props:Props) => {
    
    
    return (
        <>
            <CardProduct 
                item={props.item}
                shape={props.shapeView}
                rightTopSlot={props.favorite}
                />
        </>
    )
}