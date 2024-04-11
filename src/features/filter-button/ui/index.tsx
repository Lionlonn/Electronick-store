import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { FilterButton } from "./filter-button";
import { useAppDispatch, useStateSelector } from "src/shared/hooks";
import { fetchFilterData } from "../model";
import { Button } from "react-native-paper";




export const FilterButtonContainer = () => {
    const { items, status } = useStateSelector(item => item.filter);
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchFilterData())
    }, [dispatch])

    
    if (status !== 1) return <Text>Loader...</Text>

    
    

    return (
        <View>
            
            <FilterButton item={items}/>
        </View>
    )
}