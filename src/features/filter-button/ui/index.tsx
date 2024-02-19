import React, { useRef, useState } from "react";
import {Animated, Dimensions, Easing, FlatList, SectionList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import  Filter  from '../image/filter.svg'
import { IconButton } from "react-native-paper";
import { RenderItem } from "./render-item/index"
import { FilterData } from "../api";
import { Button } from 'shared/ui/index'


interface Item {
    item: FilterData[]
}

const { width, height } = Dimensions.get('window')



export const FilterButton = (props: Item) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    console.log(width, height)    
    const handleCheckboxChange = (label: string, checked: boolean) => {
        const newData = props.item.map((item) => {
            const updateProductData = item.data.map((dataItem) =>
                dataItem.label == label ? {...dataItem, checked} : dataItem
                
            );
            
            return {...item, data: updateProductData}
        })
        
    }

    const animatedController = useRef(new Animated.Value(0)).current;
    const bodyWidth = width
    const bodyHeight = animatedController.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 550],
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
                onPress={() => toggleListItem()}
            />
            <Animated.View style={[styles.background, {width: bodyWidth ,height:bodyHeight}]}>
                    
                    <Text style={styles.titleFilter}>Filter by</Text>

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
                    <View style={[styles.sectionButton,{display: isOpen ? 'flex' : 'none'}]}>
                        <Button buttonColor="white" onClick={toggleListItem} />
                        <Button buttonColor="yellow" onClick={toggleListItem} />
                    </View>
            </Animated.View>
            
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        width: 40,
        height: 40,
    },
    titleFilter: {
        fontFamily: 'Avenir-Black',
        fontWeight: '900',
        fontSize: 21,
        color: 'black',
        paddingLeft: 22,
        paddingRight: 20,
        marginBottom: 20,
        marginTop: 20,
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
        flex: 1,
        zIndex: 1,
        borderRadius: 16,
        backgroundColor: "#FFF",
        position: 'absolute',
        right: '-48%',
        top: 50,
        
        
    },
    sectionButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 30
    }
   
})
