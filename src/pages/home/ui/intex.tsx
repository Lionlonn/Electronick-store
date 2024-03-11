import React, { useEffect, useState } from "react";
import { Categories } from "src/entities/categories/ui";
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PopularCard } from "src/entities/popular-now/ui";
import { NewArrialsProduct } from "src/entities/arrials-product";

export const HomePage = ({navigation}: any) => {
    
    return (
        <ScrollView style={styles.bacground}>
            <View style={styles.container}>
                <PopularCard/>
                <Categories navigation={navigation}/>
                <NewArrialsProduct/>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    bacground: {
        backgroundColor: "#FFFF",
    },

    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: 'center',
        gap: 20    
    },
});
