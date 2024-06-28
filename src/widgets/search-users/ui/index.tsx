import React, { useEffect } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { getButtonProductsAll } from "src/features/category-buttons/model";
import { useAppDispatch, useStateSelector } from "src/shared/hooks";
import { SeeMoreButton } from "src/shared/ui/see-more-button";
import { ProductsList } from "src/widgets/products-list";
import { handleCategoryTitle } from "./category-title";

interface SearchUsersProps {
    navigation: any;
    categoryTitle: string;
}

export const SearchUsers:React.FC<SearchUsersProps> = ({navigation, categoryTitle}) => {
    const { item, status } = useStateSelector(state => state.buttonPrudcts)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getButtonProductsAll())
    }, [])

  

    return (
        <View>
            {categoryTitle && handleCategoryTitle(categoryTitle, navigation)}
            <ProductsList 
                shapeView='boxHorizontal' 
                item={item} 
                navigation={navigation}/> 
        </View>

        
    )

}


export const styles = StyleSheet.create({
    titleWrapper: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12      
    },
    titleText: {
        fontFamily: 'Avenir-Heavy',
        color: 'black',
        fontSize: 18,
        lineHeight: 25,
        fontWeight: '900'
    }
})