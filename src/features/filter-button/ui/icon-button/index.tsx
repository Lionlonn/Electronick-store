import React, { useEffect, useRef, useState } from "react";
import {Animated, Dimensions,  ScrollView,  SectionList, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import  Filter  from '../../image/filter.svg'
import { IconButton } from "react-native-paper";
import { RenderItem } from "../render-item/index"
import { FilterData } from "../../api";
import { Button } from 'shared/ui/index'
import MultiSlider from '@ptomasroos/react-native-multi-slider';

interface Props {
    toggleButton: () => void
}

export const ButtonFilter: React.FC<Props> = ({toggleButton}) => {




    return (
        <IconButton 
                style={styles.button}
                icon={() => <Filter/>}
                size={20}
                onPress={() => toggleButton()}
        />
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
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
    item: {
        paddingLeft: 22,
        paddingRight: 20,
        marginBottom: 20,
        marginTop: 20, 
    },
    background: {
        // flex: 1,
        // zIndex: 1,
        borderRadius: 16,
        backgroundColor: "orange",
        // position: 'absolute',
        // right: '-48%',
        // top: 50,
        
        
    },
    sectionButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 30
    },
    multisliderStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative',
    },
    priceTitle: {
        color: '#8A8B7A',
        paddingLeft: 22,
    },
    priceText: {
        color: 'black',
        fontFamily: 'Avenir-Black',
        fontWeight: '400',
        fontSize: 16,
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        paddingLeft: 22,
        paddingRight: 20,
        
       
    }
})

