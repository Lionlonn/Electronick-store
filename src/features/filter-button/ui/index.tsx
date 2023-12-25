import React, { useState } from "react";
import {FlatList, StyleSheet, Text, View} from 'react-native';
import  Filter  from '../image/filter.svg'
import { IconButton } from "react-native-paper";
import { Checkbox } from 'react-native-paper';
const DATA = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
]
interface Item {
    label: string,
    value: string
}

const RenderItem = ({label, value}: Item) => {
    return (
        <View>
            <Text>{label}</Text>
            <Text>{value}</Text>
        </View>
    )
}

export const FilterButton = () => {
    const [value, setValue] = useState<string | null>(null)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [checked, setChecked] = React.useState(false);
    
    return (
        <View>
            <IconButton
                style={styles.button}
                icon={()=> <Filter/>}
                size={20}
                onPress={() => {
                    setIsOpen(!isOpen)
                }}
            />
            


            {isOpen && (
                <FlatList 
                    data={DATA}
                    renderItem={({item}) => (
                        <View>
                            <Text>{item.label}</Text>
                            {/* <Checkbox 
                                color="black"
                                status={checked ? 'checked': 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked)
                                }} /> */}
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
    }
})
