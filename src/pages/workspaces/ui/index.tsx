import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { FeaturedWorkspace } from "src/entities/featured-workspace";
import { Product } from "src/entities/product";
import { SearchInputField } from "src/features/input";
import { ProductsList } from "src/widgets/products-list";


export const WorkSpacesPage = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* <SearchInputField/> */}
                <View style={{marginBottom: 40}}>
                    <FeaturedWorkspace />
                </View>
                <ProductsList/>
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'white',
        // alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20
    }
})