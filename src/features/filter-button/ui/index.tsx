import React, { useRef, useState } from "react";
import {Animated, Button, Easing, FlatList, SectionList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import  Filter  from '../image/filter.svg'
import { IconButton } from "react-native-paper";
import CheckBox from '@react-native-community/checkbox';
import { RenderItem } from "./render-item/index"
import { FilterData } from "../api";

interface Item {
    item: FilterData[]
}





export const FilterButton = (props: Item) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const height = useRef(new Animated.Value(0)).current;
    
    const handleCheckboxChange = (label: string, checked: boolean) => {
        const newData = props.item.map((item) => {
            const updateProductData = item.data.map((dataItem) =>
                dataItem.label == label ? {...dataItem, checked} : dataItem
                
            );
            
            return {...item, data: updateProductData}
        })
        
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
                        sections={props.item}
                        keyExtractor={(item) => item.label}
                        renderItem={({item}) => (
                            <View>
                                <RenderItem {...item} onChange={handleCheckboxChange}/>
                            </View>
                        )}
                        renderSectionHeader={({section: {title}}) => (
                            <Text style={styles.headerItem}>{title}</Text>
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
    headerItem: {
        fontFamily: 'Avenir-Black',
        fontSize: 16,
        fontWeight: '500',
        color: '#8A8B7A',
        fontStyle: 'normal',
        paddingLeft: 22,
        paddingRight: 20,
        marginBottom: 20,
        marginTop: 20,
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
