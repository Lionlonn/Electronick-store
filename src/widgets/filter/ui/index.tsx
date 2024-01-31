import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { InputText } from "src/features/input/ui";

export const Filter = () => {
    

    return (
        <View style={styles.contaiter}>  
            
            <View style={styles.filterStyle}>
                
                <InputText/>
            </View>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    contaiter: {
        flex: 1
    },
    filterStyle: {
        
    }
})