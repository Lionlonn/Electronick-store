import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import SearchIcon from '../../image/search.svg'
import BasketIcon from '../../image/basket-icon.svg'
export const MenuButton = ({navigation}: any) => {

    console.log(navigation)
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('SearchPage')}}>
                <SearchIcon/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <BasketIcon/>
            </TouchableOpacity>
        </View>
        
    )
}



const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        gap: 10
    },
    button: {
        borderWidth: 2,
        borderRadius: 50,
        borderColor: '#D3D3D3',
        width: 42,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center'
    }
})