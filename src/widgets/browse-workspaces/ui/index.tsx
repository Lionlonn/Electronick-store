import React, { useState } from "react";
import { View } from "react-native";
import { CategoryButtons } from "src/features/category-buttons";
import { SearchUsers } from "src/widgets/search-users";



export const BrowseWorkSpaces = ({navigation}: any) => {
    const [ categoryTitle, setCategoryTitle ] = useState<string>("Show all")

    return (
        <View style={{gap: 32}}>
            <CategoryButtons setCategory={setCategoryTitle}/>
            <SearchUsers navigation={navigation} categoryTitle={categoryTitle}/>
        </View>
    )
}