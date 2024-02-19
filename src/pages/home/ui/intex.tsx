import React from "react";
import { Categories } from "src/entities/categories/ui";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Filter } from "src/widgets/filter";




export const HomePage = ({navigation}: any) => {
    return (
        <View style={styles.container}>  
            
            <Filter/>
            <Categories navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})