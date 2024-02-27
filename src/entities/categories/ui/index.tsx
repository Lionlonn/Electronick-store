import React from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { CategoriesCarousel } from "./categories";
import Developer from '../image/developer.svg'



export const Categories = ({navigation}: any) => {
   
    

    return (
        <>
            <CategoriesCarousel navigation={navigation}/>
        </>
        
    )
}