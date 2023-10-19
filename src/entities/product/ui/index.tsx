import React from "react";
import { Text } from "react-native";
import { ProductCard } from "./card";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { addFavoritesById, removeFavoritesById } from "../model";


export const Product = () => {
    const favorite = useSelector((state:RootState) => state.favourite.favorites)
    const dispatch = useDispatch<AppDispatch>()

    console.log(favorite);
    

    const addToFavorites = () => {
        const id = 4;
        const action = addFavoritesById(id);
        dispatch(action)
    }
    const removeToFavorites = () => {
        const id = 3;
        const action = removeFavoritesById(id);
        dispatch(action)
    }
    

    return (
        <>
            <ProductCard 
                addToFavorites={addToFavorites}
                removeToFavorites={removeToFavorites}
            />
        </>
    )
}