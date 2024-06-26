import React, {useState } from "react";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { useAppDispatch } from "src/shared/hooks";
import { getButtonDeveloperProduct, getButtonProductsAll, getFilmakingProduct, getPhotographyProduct, getPodcastProduct } from "../../model";
import { Button } from "react-native-paper";
import { ClickHandlesCategory } from "../actions";

interface ClickHandles {
    [key: string]: () => void;
}

interface CategoryButtonsProps {
    setCategory: (category: string) => void;
}


export const CategoryButtons:React.FC<CategoryButtonsProps> = ({setCategory}) => {
    const [ isPressed, setIsPressed ] = useState<string>('Show all')
    const categories = ['Show all', 'Developer', 'Podcast creator', 'Filmaking', 'Photography']; 
    const dispatch = useAppDispatch();
    const width = useWindowDimensions().width
    const sizeM = width > 420

    const handles = ClickHandlesCategory(dispatch, setIsPressed, setCategory);
    
    const handleClick = (key: string) => {
        handles[key]()
    }

    const buttonStyle = (category: string) => ({
       backgroundColor: isPressed === category ? "rgb(4, 11, 20)" : "rgb(244, 245, 247)",
       color: isPressed === category ? "white" : "black"
    })


    return (
        <View>
            <Text style={styles.title}>Browse workspaces</Text>
            <ScrollView 
                contentContainerStyle={styles.container}
                showsHorizontalScrollIndicator={false}
                horizontal={true}>
                {categories.map((category, index) => (
                    <View key={index}>
                        <Button onPress={() => handleClick(category)} 
                            style={[
                                {   
                                    padding: 3
                                },
                                buttonStyle(category)
                                ]
                            }>
                            <Text style={[
                                {
                                    fontSize: sizeM ? 24 : 14,
                                    lineHeight: sizeM ? 25 : 16
                                },
                                buttonStyle(category)
                                ]}>{category}</Text>
                        </Button>
                    </View>
                ))}
                </ScrollView> 
        </View>
        
        
    )
}

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: 21,
        lineHeight: 29,
        fontWeight: '900',
        fontFamily: "Avenir-Heavy",
        marginBottom: 12
    },
    container: {
        gap: 20,
        flexDirection: 'row',
    },
    
})