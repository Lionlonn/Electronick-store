import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAppDispatch } from "src/shared/hooks";
import { getButtonDeveloperProduct, getButtonProductsAll, getFilmakingProduct, getPhotographyProduct, getPodcastProduct } from "../../model";

interface ClickHandles {
    [key: string]: () => void
}


export const CategoryButtons = () => {
    const categories = ['Show all', 'Developer', 'Podcast creator', 'Filmaking', 'Photography']; 
    const dispatch = useAppDispatch() 

    const handleClickCategory: ClickHandles = {
        'Show all': () => dispatch(getButtonProductsAll()),
        'Developer': () => dispatch(getButtonDeveloperProduct()),
        'Podcast creator': () => dispatch(getPodcastProduct()),
        'Filmaking': () => dispatch(getFilmakingProduct()),
        'Photography': () => dispatch(getPhotographyProduct())
    }

    return (
        <View style={styles.container}>
            {categories.map((category, index) => (
                <TouchableOpacity 
                    key={index} 
                    onPress={handleClickCategory[category]}
                >
                    <Text>{category}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})