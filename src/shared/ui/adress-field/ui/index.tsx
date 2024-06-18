import React from "react";
import { StyleSheet, TextInput } from "react-native";

interface AdressProps {
    adress: string;
    setAdress: (text: string) => void;
}


export const AdressField:React.FC<AdressProps> = ({adress, setAdress}) => {


    return (
        <TextInput 
            style={styles.container}
            placeholder="City, street, house"
            onChangeText={(text) => setAdress(text)}
            value={adress}
        />
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        fontFamily: "Avenir-Heavy",

    }
})