import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { FilterButton } from "./filter-button";
import { useStateSelector } from "src/shared/hooks";
import { fetchFilterData } from "../model";




export const FilterButtonContainer = () => {
    const { items, status } = useStateSelector(item => item.filter);

    useEffect(() => {
        fetchFilterData()
    }, [])

    
    console.log("ITEMS: ",items);
    if (status !== 1) return <Text>Loader...</Text>

    
    

    return (
        <View>
            <FilterButton item={items}/>
        </View>
    )
}