import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { FilterData } from "src/features/filter-button";
import { addChecked, fetchFilterData, removeChecked } from "src/features/filter-button/model";
import { InputText } from "src/features/input/ui";
import { useAppDispatch, useStateSelector } from "src/shared/hooks";
interface Item  {
    item: FilterData
}

export const Filter = () => {
    const dispatch = useAppDispatch()
    const {items, status} = useStateSelector(state => state.filter)

    useEffect(() => {
        dispatch(fetchFilterData());
    }, [dispatch])

    if (status !== 1) {
        return <Text>...Loading</Text>
    }
    
    const isChecked = items.some(item => item.data.map(item => item.label === item.label))
    const handleToggleChecked = (item: ({title: string, label: string})) => {
        isChecked 
        ? dispatch(removeChecked(item))
        : dispatch(addChecked(item))
    }
    
    
    return (
        <View style={styles.contaiter}>  
            
            <View style={styles.filterStyle}>
                <InputText item={items}/>
            </View>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    contaiter: {
        flex: 1
    },
    filterStyle: {
        
    }
})