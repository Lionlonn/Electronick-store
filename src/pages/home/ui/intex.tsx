import React from "react";
import { Categories } from "src/entities/categories/ui";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Filter } from "src/widgets/filter";
import { PopularCard } from "src/entities/popular-now/ui";




export const HomePage = ({navigation}: any) => {
    return (
        <View style={styles.container}>  
            
            {/* <Filter/> */}
            <PopularCard/>
            <Categories navigation={navigation}/>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white"
    },
})