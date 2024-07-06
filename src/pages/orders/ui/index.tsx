import React from "react";
import { ScrollView, StyleSheet, } from "react-native";
import { FieldFilter, } from "src/features/input";
import { OrdersList } from "src/widgets/products-list";
import { FilterListAccordion } from "src/widgets/filter-list";
import { MultisliderCustom } from "src/widgets/multislider";


export const OrdersPage = ({navigation}: any) => {
 
    
    return (
        <ScrollView style={styles.container} contentContainerStyle={{gap: 20}}>
            <FieldFilter 
                    multisliderBlock={<MultisliderCustom/>}
                    listItem={<FilterListAccordion/>}
                />
            <OrdersList navigation={navigation}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: 20,        
    },
})