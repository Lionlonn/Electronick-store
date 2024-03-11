import React from "react";
import { StyleSheet, View } from "react-native";
import { FeaturedWorkspace } from "src/entities/featured-workspace";
import { SearchInputField } from "src/features/input";


export const WorkSpacesPage = () => {
    return (
        <View style={styles.container}>
            {/* <SearchInputField/> */}
            <FeaturedWorkspace/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    }
})