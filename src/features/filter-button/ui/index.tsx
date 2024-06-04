import React, { useEffect, useRef, useState } from "react";
import { View, Text, useWindowDimensions, Animated } from "react-native";
import { FilterButton } from "./filter-button";
import { useAppDispatch, useStateSelector } from "src/shared/hooks";
import { fetchFilterData } from "../model";
import { Button } from "react-native-paper";
import { ButtonFilterTest } from "./button-test";




export const FilterButtonContainer = () => {
    const { items, status } = useStateSelector(item => item.filter);
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [ values, setValue ] = useState<number[]>([10, 2000]);
    const { width, height} = useWindowDimensions()

    const animatedController = useRef(new Animated.Value(0)).current;
    const bodyWidth = width
    const bodyHeight = animatedController.interpolate({
        inputRange: [0, 1],
        outputRange: [0, height * 0.87],
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


    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchFilterData())
    }, [dispatch])

    
    if (status !== 1) return <Text>Loader...</Text>

    
    
    

    const multiSliderValuesChange = (values: number[]) => {
        setValue(values)
    }
    
    

   


    console.log(isOpen)
    return (
        <View style={{backgroundColor:'red'}}>
            
            <ButtonFilterTest toggleButton={toggleListItem}/>
           
            {/* <FilterButton item={items}/> */}
        </View>
    )
}