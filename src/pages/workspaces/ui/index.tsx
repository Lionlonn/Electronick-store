import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { FeaturedWorkspace } from "src/entities/featured-workspace";
import { CategoryButtons } from "src/features/category-buttons";
import { SearchInputField } from "src/features/input";
import { BrowseWorkSpaces } from "src/widgets/browse-workspaces";
import { FilterListAccordion } from "src/widgets/filter-list";
import { MultisliderCustom } from "src/widgets/multislider";
import { SearchUsers } from "src/widgets/search-users";


export const WorkSpacesPage = ({navigation}: any) => {
    


    return (
        <View style={styles.container}>
            <SearchInputField 
                multisliderBlock={<MultisliderCustom/>}
                listItem={<FilterListAccordion/>}
                />
            <ScrollView showsVerticalScrollIndicator={false}> 
                <View style={{marginBottom: 40}}>
                    <FeaturedWorkspace />
                </View>
                <View style={{marginBottom: 20}}>
                    <BrowseWorkSpaces navigation={navigation}/>
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