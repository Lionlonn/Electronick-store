import React from "react";
import {StyleSheet, TextInput, View} from 'react-native';
import { FilterData } from "src/features/filter-button";
import { FilterButton } from "src/features/filter-button/ui";

interface Props {
    item: FilterData[]
}

export const InputText = (props: Props) => {
    const [text, onChangeText] = React.useState('');


    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}  
                    placeholder="Search product name"
                    placeholderTextColor="#888C93"
                    underlineColorAndroid='transparent'
                    autoCorrect={false}
                />
                <View style={styles.inputInnerContainer}>
                    <FilterButton item={props.item}/>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapper: {
        position: 'relative'
    },
    input: {
        width: 360,
        height: 50,
        borderWidth: 0.6,
        borderRadius: 6,
        borderColor: "#C9CEDA",
        paddingLeft: 24,
        margin: 24,
        color: 'black',
        fontWeight: '400',
        fontSize: 16,
        fontFamily: 'Avenir-Roman',
        
    },
    inputInnerContainer: {
        position: 'absolute',
        top: 24,
        width: "100%",
        height: '100%',
        right: -330
        
        // width: '100%'
    },
})