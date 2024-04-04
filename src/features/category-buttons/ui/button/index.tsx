import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { useAppDispatch, useStateSelector } from "src/shared/hooks";
import { getButtonDeveloperProduct, getButtonProductsAll, getFilmakingProduct, getPhotographyProduct, getPodcastProduct } from "../../model";



export const CategoryButtons = () => {
    const categories = ['Show all', 'Developer', 'Podcast creator', 'Filmaking', 'Photography']; 
    const dispatch = useAppDispatch() 


    
    const handleClickCategory = (category: string) =>  {
            switch (category) {
                case 'Show all':
                    dispatch(getButtonProductsAll())
                    break
                case 'Developer':
                    dispatch(getButtonDeveloperProduct())
                    break
                case 'Podcast creator':
                    dispatch(getPodcastProduct())
                    break
                case 'Filmaking':
                    dispatch(getFilmakingProduct())
                    break
                case 'Photography':
                    dispatch(getPhotographyProduct())
            }
    }

    return (
        <View>
            {categories.map((category, index) => (
                <TouchableOpacity 
                    key={index} 
                    onPress={() => handleClickCategory(category)}
                >
                    <Text>{category}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}