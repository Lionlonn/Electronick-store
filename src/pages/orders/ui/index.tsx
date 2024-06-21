import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SearchInputField } from "src/features/input";
import { CartOrder } from "src/shared/ui/card";
import { OrdersList } from "src/widgets/products-list";



export const OrdersPage = ({navigation}: any) => {
 
    
    return (
        <View style={styles.container}>
            <SearchInputField/>
            <OrdersList navigation={navigation}/>
        </View>
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