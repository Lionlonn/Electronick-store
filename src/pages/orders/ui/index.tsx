import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SearchInputField } from "src/features/input";
import { CartOrder } from "src/shared/ui/card";
import { OrdersList } from "src/widgets/products-list";



export const OrdersPage = () => {
 
    
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <SearchInputField/>
            <OrdersList/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingHorizontal: 20,
        gap: 20
    }
})