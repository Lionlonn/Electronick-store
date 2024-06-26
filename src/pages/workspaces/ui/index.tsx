import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { FeaturedWorkspace } from "src/entities/featured-workspace";
import { CategoryButtons } from "src/features/category-buttons";
import { SearchInputField } from "src/features/input";
import { BrowseWorkSpaces } from "src/widgets/browse-workspaces";
import { SearchUsers } from "src/widgets/search-users";


export const WorkSpacesPage = ({navigation}: any) => {
    


    return (
        <View style={styles.container}>
            <SearchInputField/>
            <ScrollView showsVerticalScrollIndicator={false}> 
                <View style={{marginBottom: 40}}>
                    <FeaturedWorkspace />
                </View>
               
                <BrowseWorkSpaces navigation={navigation}/>
                
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