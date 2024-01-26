import React, { useRef, useState } from "react";
import {Animated, Button, Easing, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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



export const FilterButton = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const height = useRef(new Animated.Value(0)).current;
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


    const toggleList = () => {
        Animated.timing(height, {
          toValue: isOpen ? 0 : 500, // Установите желаемую высоту списка
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: false,
        }).start(() => {
            if (isOpen == true) {
                height.setValue(0)
            }
        });
        
        
        console.log(isOpen)
        setIsOpen(!isOpen);
      };
    


    return (

        <View>
            
            <IconButton
                style={styles.button}
                icon={() => <Filter/>}
                size={20}
                onPress={() => {
                    // setIsOpen(!isOpen)
                    toggleList()
                }}
            />

            {isOpen && (
                <Animated.View style={{ height, overflow: 'hidden' }}>
                    <FlatList 
                        data={data}
                        keyExtractor={(item) => item.label}
                        // style={isOpen ? styles.true : styles.false}
                        renderItem={({item}) => (
                            <View >
                                <RenderItem {...item} onChange={handleCheckboxChange}/>
                            </View>
                            
                            
                        )}    
                    />
                </Animated.View>
                
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
    },
    true: {
        opacity: 1, 
        transition:'2s'
    },
    false: {
        opacity: 0
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 22,
        paddingRight: 20,
        marginBottom: 20,

        
    },
    itemLabel: {
        fontFamily: 'Avenir-Roman',
        fontSize: 16,
        fontWeight: '400'
    }
})
