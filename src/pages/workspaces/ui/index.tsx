import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { FeaturedWorkspace } from "src/entities/featured-workspace";
import { CategoryButtons } from "src/features/category-buttons";
import { SearchInputField } from "src/features/input";
import { SearchUsers } from "src/widgets/search-users";


export const WorkSpacesPage = ({navigation}: any) => {
    const [ categoryTitle, setCategoryTitle ] = useState<string>("Show all")


    return (
        <View style={styles.container}>
            <SearchInputField/>
            <ScrollView showsVerticalScrollIndicator={false}> 
                <View style={{marginBottom: 40}}>
                    <FeaturedWorkspace />
                </View>
                <Text>{categoryTitle}</Text>
                <View style={{gap: 32}}>
                    <CategoryButtons setCategory={setCategoryTitle}/>
                    <SearchUsers navigation={navigation}/>
                </View>
                
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingHorizontal: 20,
        
    }
})