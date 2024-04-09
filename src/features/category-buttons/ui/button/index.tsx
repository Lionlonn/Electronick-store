import React, { useCallback, useMemo, useState } from "react";
import {FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAppDispatch } from "src/shared/hooks";
import { getButtonDeveloperProduct, getButtonProductsAll, getFilmakingProduct, getPhotographyProduct, getPodcastProduct } from "../../model";
import { Button } from "react-native-paper";

interface ClickHandles {
    [key: string]: () => void
}


export const CategoryButtons = () => {
    const [ isPressed, setIsPressed ] = useState<string>('Show all')
    const categories = ['Show all', 'Developer', 'Podcast creator', 'Filmaking', 'Photography']; 
    const dispatch = useAppDispatch();

    const handleClickCategory = (category: string) => {
        setIsPressed(category)
    }

    const handleClickCategoryActions: ClickHandles = {
        'Show all': () => dispatch(getButtonProductsAll()),
        'Developer': () => dispatch(getButtonDeveloperProduct()),
        'Podcast creator': () => dispatch(getPodcastProduct()),
        'Filmaking': () => dispatch(getFilmakingProduct()),
        'Photography': () => dispatch(getPhotographyProduct())
    };

    const buttonStyle = (category: string) => ({
       backgroundColor: isPressed === category ? "rgb(4, 11, 20)" : "rgb(244, 245, 247)",
       color: isPressed === category ? "white" : "black"
    })

    
    return (
        <ScrollView 
            contentContainerStyle={styles.container}
            showsHorizontalScrollIndicator={false}
            horizontal={true}>
            {categories.map((category, index) => (
                <View key={index}>
                    <Button onPress={() => {
                        handleClickCategory(category);
                        handleClickCategoryActions[category]; 
                    }} style={[{padding: 4},buttonStyle(category)]}>
                        <Text style={buttonStyle(category)}>{category}</Text>
                    </Button>
                </View>
            ))}
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 20,
        flexDirection: 'row',
    },
    
})