import React, { useEffect, useId } from "react";
import { Text } from "react-native";
import { ProductCard } from "./card";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { useActionCreators, useAppDispatch, useStateSelector } from "../../../shared/hooks/hooks";
import { createSelector } from 'reselect';



export const Product = () => {
    
    
    const { items, status} = useStateSelector(state => state.products)
    
    

    return (
        <>
            <ProductCard  items={items}/>
        </>
    )
}