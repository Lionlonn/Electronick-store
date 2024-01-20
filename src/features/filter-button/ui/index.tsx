import React, { useState } from "react";
import {Button, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import  Filter  from '../image/filter.svg'
import { IconButton } from "react-native-paper";
import CheckBox from '@react-native-community/checkbox';

interface Item {
    label: string,
    checked: boolean
    onChange?: (label: string, checked: boolean) => void
}

const RenderItem = ({label, checked, onChange}: Item ) => {
    const [isChecked, setChecked] = React.useState(checked);

    const handleValueChange = (newValue: boolean) => {
        setChecked(newValue)
        if (onChange) onChange(label, newValue)

    }

    return (
        <View>
            <Text>{label}</Text>
            
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



export const FilterButton = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [ data, setData ] = useState<Item[]>([
        
        { label: 'Item 1', checked: false },
        { label: 'Item 2', checked: false },
        { label: 'Item 3', checked: false },
        { label: 'Item 4', checked: false },
        { label: 'Item 5', checked: false },
        { label: 'Item 6', checked: false },
        { label: 'Item 7', checked: false },
        { label: 'Item 8', checked: false },
    ])
    
    const handleCheckboxChange = (label: string, checked: boolean) => {
        const index = data.findIndex(item => item.label === label);
        console.log(index)
        const newData = [...data];
        newData[index] = {...newData[index], checked};
        setData(newData);
        
    }
    return (

        <View>
            
            <IconButton
                style={styles.button}
                icon={() => <Filter/>}
                size={20}
                onPress={() => {
                    setIsOpen(!isOpen)
                }}
            />
            
            
            {isOpen && (
                <FlatList 
                    
                    data={data}
                    keyExtractor={(item) => item.label}
                    renderItem={({item}) => (
                        <View >
                            

                            <RenderItem {...item} onChange={handleCheckboxChange}/>
                            
                        </View>
                        
                        
                    )}    
                />
            )}
            
        </View>
    )
}

const styles = StyleSheet.create({
    dropdown: {
        
        margin: 16,
        
        height: 50,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        
        elevation: 2,
    },
    icon: {
        margin: 5
    },
    button: {
        width: 40,
        height: 40
    },
    checkbox: {
        width: 20,
        height: 20,
    }
})
