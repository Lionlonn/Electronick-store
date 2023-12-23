import React from "react";
import {StyleSheet} from 'react-native';
import { IconButton } from 'react-native-paper';
import  Filter  from '../image/filter.svg'

export const FilterButton = () => (
    <>
        <IconButton
        style={styles.button}
        icon={()=> <Filter/>}
        size={20}
        onPress={() => console.log('Pressed')}
        />
    </>
    
);


const styles = StyleSheet.create({
    button: {

    }
})