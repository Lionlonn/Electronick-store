import React, { useRef, useState } from "react";
import {Animated, Button, Easing, FlatList, SectionList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import  Filter  from '../image/filter.svg'
import { IconButton } from "react-native-paper";
import CheckBox from '@react-native-community/checkbox';

interface Item {
    title: string;
    data: Array<{ label: string; checked: boolean }>;
    
}

const RenderItem = ({label, checked,  onChange}: 
    {label: string, checked: boolean, onChange:(label: string, checked: boolean) => void}) => {
        
    const [isChecked, setChecked] = React.useState(checked);
    const handleValueChange = (newValue: boolean) => {
        setChecked(newValue)
        if (onChange) onChange(label, newValue)
    }

    

    return (
        <View style={styles.listItem}>
            <View key={label}>
                <Text style={styles.itemLabel}>{label}</Text>
                <CheckBox
                    disabled={false}
                    value={isChecked}
                    onValueChange={handleValueChange}
                    tintColors={{true: "#BA5C3D", false: "Grey deeper"}}
                    onAnimationType="bounce"
                />
            </View>  
        </View>
    )


}   



export const FilterButton = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const height = useRef(new Animated.Value(0)).current;
    const [ data, setData ] = useState<Item[]>([
        {   
            title: 'Products Type',
            data: [
                { label: 'Laptops', checked: false },
                { label: 'Tables', checked: false },
                { label: 'Keyboard', checked: false },
                { label: 'Chairs', checked: false },
            ]
        },
        {   
            title: 'brand',
            data: [
                { label: 'Laptops', checked: false },
                { label: 'Tables', checked: false },
                { label: 'Keyboard', checked: false },
                { label: 'Chairs', checked: false },
            ]
        }
        
    ])
    
    const handleCheckboxChange = (label: string, checked: boolean) => {
        const newData = data.map((item) => {
            const updateProductData = item.data.map((dataItem) =>
                dataItem.label == label ? {...dataItem, checked} : dataItem
            );
            return {...item, data: updateProductData}
        })
        setData(newData);
        
    }

    const animatedController = useRef(new Animated.Value(0)).current;
    const [bodySectionHeight, setBodySectionHeight] = useState(0);

    const bodyHeight = animatedController.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1000],
    });
    const toggleListItem = () => {
        if (isOpen) {
          Animated.timing(animatedController, {
            duration: 300,
            toValue: 0,
            useNativeDriver: false
          }).start();
        } else {
          Animated.timing(animatedController, {
            duration: 300,
            toValue: 1,
            useNativeDriver: false
          }).start();
        }
        setIsOpen(!isOpen);
    };

    return (

        <View style={styles.container}>
            
            <IconButton
                style={styles.button}
                icon={() => <Filter/>}
                size={20}
                onPress={() => {
                    toggleListItem()
                }}
            />
            <Animated.View style={[styles.background, {height:bodyHeight}]}>
                    
                    <SectionList 
                        sections={data}
                        keyExtractor={(item) => item.label}
                        renderItem={({item}) => (
                            <View>
                                <RenderItem {...item} onChange={handleCheckboxChange}/>
                            </View>
                        )}
                        renderSectionHeader={({section: {title}}) => (
                            <Text>{title}</Text>
                        )}
                    />
            </Animated.View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    button: {
        width: 40,
        height: 40,
    },
    checkbox: {
        width: 20,
        height: 20,
    },
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
    background: {
        backgroundColor: "#FFF",
        position: 'absolute',
        top: 51,
        right: 330,
        width: '100%',
        zIndex: 1,
        borderRadius: 16
    }
   
})
