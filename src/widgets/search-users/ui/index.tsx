import React, { useEffect } from "react";
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Product } from "src/entities/product";
import { getButtonProductsAll } from "src/features/category-buttons/model";
import { Favorite } from "src/features/favorite";
import { useStateSelector } from "src/shared/hooks";
import { SeeMoreButton } from "src/shared/ui/see-more-button";

interface Props {
    navigation: any
}

export const SearchUsers = (props: Props) => {
    const { item, status } = useStateSelector(state => state.buttonPrudcts)
    const favoriteItems = useStateSelector(state => state.favorite.items) 

    

    const handleCategoryTitle = (category: string) => {
        return (
            <View style={styles.titleWrapper}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.titleText}>What </Text>
                    <Text style={[styles.titleText, {color: 'rgb(186, 92, 61)'}]}>{category}</Text>
                    <Text style={styles.titleText}> search for</Text>
                </View>
                <SeeMoreButton navigation={props.navigation} path="HomePage"/>
            </View>
        )
    }
    const categoryTitle = item?.find(obj => {return obj.category})


    return (
        <View>
            {categoryTitle && handleCategoryTitle(categoryTitle.category)}
            <FlatList 
                data={item}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{gap: 17}}
                renderItem={({item}) => (
                <TouchableOpacity>
                        <Product 
                            key={item.id} 
                            item={item} 
                            shapeView={'box'}
                            favorite={
                                <Favorite 
                                    product={item} 
                                    isFavorite={favoriteItems.some(product => product.id === item.id)}
                                />
                            }
                            />
                    </TouchableOpacity> 
                )}
            />
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