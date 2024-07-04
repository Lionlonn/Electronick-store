import MultiSlider from "@ptomasroos/react-native-multi-slider";
import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from "react-native";




export const MultisliderCustom = () => {
    const [ values, setValue ] = useState<number[]>([10, 2000]);
    const width = useWindowDimensions().width
    const multiSliderValuesChange = (values: number[]) => {
        setValue(values)
    }
    
    return (
        <View style={styles.container}>
            <MultiSlider 
                    values={values}
                    sliderLength={width - 55}
                    onValuesChange={multiSliderValuesChange}
                    min={10}
                    max={2000}
                    step={1}
                    allowOverlap = {false}
                    snapped
                    minMarkerOverlapDistance = {30}
                    trackStyle={{backgroundColor: '#F4F5FA', height: 6, borderRadius: 8}}
                    markerStyle={{backgroundColor: '#FF7F50', height: 15, width: 15}}
                    selectedStyle={{backgroundColor: '#FF7F50'}}
                />

            <View style={styles.priceContainer}>
                <Text style={styles.priceText}>${values[0]}</Text>
                <Text style={styles.priceText}>${values[1]}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    priceText: {
        color: 'black',
        fontFamily: 'Avenir-Black',
        fontWeight: '400',
        fontSize: 16,
        
    },
    
})