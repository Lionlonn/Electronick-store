import React from "react";
import { FilterData } from "src/features/filter-button";
import {Animated, Button, Easing, FlatList, SectionList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';



export const RenderItem = ({label, checked,  onChange}: 
    {label: string, checked: boolean, onChange:(label: string, checked: boolean) => void}) => {
    
    const [isChecked, setChecked] = React.useState(checked);
    const handleValueChange = (newValue: boolean) => {
        setChecked(newValue)
        if (onChange) onChange(label, newValue)
    }
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemLabel}>{label}</Text>
            <CheckBox
                disabled={false}
                value={isChecked}
                onValueChange={handleValueChange}
                tintColors={{true: "#BA5C3D", false: "Grey deeper"}}
                onAnimationType="bounce"
            />
        </View>
    )
}   

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 22,
        paddingRight: 20,
        marginBottom: 20,
        marginTop: 20,
    },
    itemLabel: {
        fontFamily: 'Avenir-Black',
        fontSize: 16,
        fontWeight: '500',
        color: '#040B14',
        fontStyle: 'normal'
    },
})