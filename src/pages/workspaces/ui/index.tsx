import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { FeaturedWorkspace } from "src/entities/featured-workspace";
import { Product } from "src/entities/product";
import { CategoryButtons } from "src/features/category-buttons";
import { ContainerCategoryButton } from "src/features/category-buttons/ui";
import { SearchInputField } from "src/features/input";
import { ProductsList } from "src/widgets/products-list";
import { SearchUsers } from "src/widgets/search-users";


export const WorkSpacesPage = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* <SearchInputField/> */}
                <View style={{marginBottom: 40}}>
                    <FeaturedWorkspace />
                </View>
                <ContainerCategoryButton/>
                <SearchUsers/>
                {/* <ProductsList shapeView={'box'}/> */}
                
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20
    }
})