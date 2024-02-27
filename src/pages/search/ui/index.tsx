import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";





export const SearchPage = ({navigation}: any) => {
    return (
        <View style={styles.container}>  
            <Text>SEARCH PAGE</Text>
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