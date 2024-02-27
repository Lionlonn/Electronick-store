import React from "react";
import { StyleSheet, View } from "react-native";
import { ProductsList } from "src/widgets/products-list";


export const WorkSpacesPage = () => {
    return (
        <View style={styles.container}>
            <ProductsList/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})