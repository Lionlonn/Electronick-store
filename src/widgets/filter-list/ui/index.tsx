import MultiSlider from "@ptomasroos/react-native-multi-slider";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import {Animated, Dimensions, ScrollView, SectionList, StyleSheet, Text, TextInput, View, useWindowDimensions} from 'react-native';
import { ButtonFilter, RenderItem } from "src/features/filter-button";
import { fetchFilterData } from "src/features/filter-button/model";
import { useAppDispatch, useStateSelector } from "src/shared/hooks";
import { Button } from "src/shared/ui";



export const FilterListAccordion = () => {
    const { items, status } = useStateSelector(item => item.filter);



    const handleCheckboxChange = (label: string, checked: boolean) => {
        const newData = items.map((item) => {
            const updateProductData = item.data.map((dataItem) =>
                dataItem.label == label ? {...dataItem, checked} : dataItem
                
            );
            
            return {...item, data: updateProductData}
        })
        
    }

    return (
        <View>
            <SectionList 
                sections={items}
                keyExtractor={(item) => item.label}
                scrollEnabled={false}
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <RenderItem {...item} onChange={handleCheckboxChange}/>
                    </View>
                )}
                renderSectionHeader={({section: {title}}) => (
                    <Text style={styles.headerItem}>{title}</Text>
                )}
            />  
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        paddingLeft: 22,
        paddingRight: 20,
        marginBottom: 20,
        marginTop: 20, 
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
})