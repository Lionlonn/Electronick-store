import React, { useEffect } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FieldFilter, SearchInputField } from "src/features/input";
import { FilterListAccordion } from "src/widgets/filter-list";
import { MultisliderCustom } from "src/widgets/multislider";


export const SearchPage = () => {
   
    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
            
              
                <FieldFilter 
                    multisliderBlock={<MultisliderCustom/>}
                    listItem={<FilterListAccordion/>}
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
     
        backgroundColor: "white"
    },
})