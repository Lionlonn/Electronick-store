import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Text, View } from "react-native";
import { CategoryButtons } from "./button";
import { useAppDispatch, useStateSelector } from "src/shared/hooks";
import { DeveloperProductsApi } from "../api";
import { useDispatch } from "react-redux";


export const ContainerCategoryButton = () => {
    const { item, status } = useStateSelector(state => state.buttonPrudcts)
    const categories = ['Show all', 'Developer'];
    

    // console.log(item)
    return (
        <View>
            
            
            <CategoryButtons/>

            {/* {item?.map(it => (
                <Text style={{marginTop: 40}}>{it.name}</Text>
            ))} */}
        </View>
    )
}