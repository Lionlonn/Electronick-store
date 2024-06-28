import React, { useEffect } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { getButtonProductsAll } from "src/features/category-buttons/model";
import { useAppDispatch, useStateSelector } from "src/shared/hooks";
import { SeeMoreButton } from "src/shared/ui/see-more-button";
import { ProductsList } from "src/widgets/products-list";

interface handleCategoryTitleProps {
    categoryTtile: string;
    navigation: any;
    // title: string
}

export const HandleCategoryTitle:React.FC<handleCategoryTitleProps> = ({categoryTtile, navigation}) => {

    
    return (
        <View style={styles.titleWrapper}>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.titleText}>What </Text>
                <Text style={[styles.titleText, {color: 'rgb(186, 92, 61)'}]}>{categoryTtile}</Text>
                <Text style={styles.titleText}> search for</Text>
            </View>
            <SeeMoreButton navigation={navigation} path="ProductsWorkspace" categoryTitle={categoryTtile}/>
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