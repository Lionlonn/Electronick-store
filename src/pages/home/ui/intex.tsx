import React from "react";
import { Categories } from "src/entities/categories/ui";
import { Button, Text, TouchableOpacity } from "react-native";
import { Filter } from "src/widgets/filter";




export const HomePage = ({navigation}: any) => {
    return (
        <>  
            
            
            <Filter/>
            <Categories navigation={navigation}/>
        </>
    )
}