import React from "react";
import { StyleSheet, View } from "react-native";
import { FeaturedWorkspace } from "src/entities/featured-workspace";
import { Product } from "src/entities/product";
import { SearchInputField } from "src/features/input";
import { ProductsList } from "src/widgets/products-list";


export const WorkSpacesPage = () => {
    return (
        <View style={styles.container}>
            {/* <SearchInputField/> */}
            <FeaturedWorkspace/>
            <ProductsList/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        gap: 40
    }
})