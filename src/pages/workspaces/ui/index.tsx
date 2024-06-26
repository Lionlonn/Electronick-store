import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { FeaturedWorkspace } from "src/entities/featured-workspace";
import { Product } from "src/entities/product";
import { CategoryButtons } from "src/features/category-buttons";
import { ContainerCategoryButton } from "src/features/category-buttons/ui";
import { SearchInputField } from "src/features/input";
import { ProductsList } from "src/widgets/products-list";
import { SearchUsers } from "src/widgets/search-users";


export const WorkSpacesPage = ({navigation}: any) => {
    return (
        <View style={styles.container}>
            <SearchInputField/>
            <ScrollView showsVerticalScrollIndicator={false}> 
                <View style={{marginBottom: 40}}>
                    <FeaturedWorkspace />
                </View>
                <View style={{gap: 32}}>
                    <ContainerCategoryButton/>
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