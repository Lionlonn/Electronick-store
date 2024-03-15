import React from "react";
import { StyleSheet, View } from "react-native";
import { FeaturedWorkspace } from "src/entities/featured-workspace";
import { SearchInputField } from "src/features/input";
import { CardProduct } from "src/shared/ui/card";


export const WorkSpacesPage = () => {
    return (
        <View style={styles.container}>
            {/* <SearchInputField/> */}
            <FeaturedWorkspace/>
            <CardProduct/>
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